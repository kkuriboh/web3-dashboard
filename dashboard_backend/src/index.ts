import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import cors from 'cors'
import { User } from './entities/User'
import Game from './entities/Game'
import { userResolver } from './resolvers/user'
import { gameResolver } from './resolvers/game'
// import cookieParser from 'cookie-parser'
// import { verify } from 'jsonwebtoken'
// import { createAccessToken, createRefreshToken } from './utils/auth'

async function main() {
	await createConnection({
		type: 'postgres',
		url: process.env.DB_URL,
		logging: true,
		synchronize: true,
		entities: [User, Game],
	})

	const app = express()
	// app.use(cookieParser())
	// app.use(async (req: any, res, next) => {
	// 	const accessToken = req.cookies['jida']
	// 	const refreshToken = req.cookies['jidr']
	// 	if (!accessToken && !refreshToken) {
	// 		next()
	// 	}
	// 	try {
	// 		const data = verify(accessToken, process.env.TOKEN_SECRET!) as any
	// 		req.userId = data.userId
	// 		return next()
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// 	if (!refreshToken) {
	// 		return next()
	// 	}

	// 	let data

	// 	try {
	// 		data = verify(accessToken, process.env.REFRESH_TOKEN_SECRET!) as any
	// 	} catch (error) {
	// 		return next()
	// 	}

	// 	const user = await User.findOne({ id: data.userId })

	// 	if (!user || user.tokenVersion !== data.tokenVersion) {
	// 		return next()
	// 	}

	// 	const aToken = createAccessToken(user)
	// 	const rToken = createRefreshToken(user)
	// 	res.cookie('jida', aToken, {
	// 		httpOnly: true,
	// 		expires: new Date(Date.now() + 60 * 60 * 24 * 7),
	// 		sameSite: 'none',
	// 	})
	// 	res.cookie('jidr', rToken, {
	// 		httpOnly: true,
	// 		expires: new Date(Date.now() + 60 * 60 * 24 * 7),
	// 		sameSite: 'none',
	// 	})
	// 	req.userId = user.id

	// 	next()
	// })

	// app.post('/refresh_token', async (req, res) => {
	// 	const token = req.cookies.jid
	// })

	const origin = process.env.CORS_ORIGIN?.split(',')
	app.use(
		cors({
			origin,
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

	app.listen({ port: process.env.PORT }, () => {
		console.log(
			'server up and running at localhost:4000' + server.graphqlPath
		)
	})
}

main().catch((err) => {
	console.log(err)
})
