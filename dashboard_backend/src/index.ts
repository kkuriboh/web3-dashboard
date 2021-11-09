import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { userResolver } from './resolvers/user'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { User } from './entities/User'
import Game from './entities/Game'
import { gameResolver } from './resolvers/game'

async function main() {
	const conn = await createConnection({
		type: 'postgres',
		url: 'postgres://ddcztnll:De02KlAERwev2KMxYfyNxKmA-5bvZpcb@motty.db.elephantsql.com/ddcztnll',
		logging: true,
		synchronize: true,
		entities: [User, Game],
	})
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

	const app = express()
	await server.start()
	server.applyMiddleware({ app })

	app.listen({ port: 4000 }, () => {
		console.log(
			'server up and running at localhost:4000' + server.graphqlPath
		)
	})
}

main().catch((err) => {
	console.log(err)
})
