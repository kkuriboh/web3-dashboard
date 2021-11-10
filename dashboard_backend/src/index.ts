import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import cors from 'cors'

import { User } from './entities/User'
import Game from './entities/Game'
import { userResolver } from './resolvers/user'
import { gameResolver } from './resolvers/game'

async function main() {
	const conn = await createConnection({
		type: 'postgres',
		url: 'postgres://ddcztnll:De02KlAERwev2KMxYfyNxKmA-5bvZpcb@motty.db.elephantsql.com/ddcztnll',
		logging: true,
		synchronize: true,
		entities: [User, Game],
	})

	const app = express()

	app.use(
		cors({
			origin: [
				'http://localhost:3000',
				'https://studio.apollographql.com',
			],
			credentials: true,
		})
	)

	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [userResolver, gameResolver],
			validate: false,
		}),
		context: ({ req, res }) => ({
			req,
			res,
		}),
	})

	await server.start()

	server.applyMiddleware({ app, cors: false })

	app.listen({ port: 4000 }, () => {
		console.log(
			'server up and running at localhost:4000' + server.graphqlPath
		)
	})
}

main().catch((err) => {
	console.log(err)
})
