import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import cors from 'cors'
import { PrismaClient } from '.prisma/client'
import { resolvers } from '../prisma/generated/type-graphql'

async function main() {
	const prisma = new PrismaClient()

	const app = express()
	const origin = process.env.CORS_ORIGIN?.split(',')
	app.use(
		cors({
			origin,
			credentials: true,
		})
	)

	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: resolvers,
			validate: false,
		}),
		context: () => ({ prisma }),
	})

	await server.start()

	server.applyMiddleware({ app, cors: false })

	app.listen({ port: process.env.PORT }, () => {
		console.log(
			'server up and running at localhost:4000' + server.graphqlPath
		)
	})
}

main().catch((err) => {
	console.log(err)
})
