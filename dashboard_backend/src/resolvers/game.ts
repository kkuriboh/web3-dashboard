import {
	Arg,
	Field,
	InputType,
	Mutation,
	ObjectType,
	Query,
	Resolver,
} from 'type-graphql'
import { getConnection } from 'typeorm'
import Game from '../entities/Game'
import { validateGameForm } from '../utils/resolverValidation'
import FieldError from '../utils/Fielderror'

@ObjectType()
class GameResponse {
	@Field(() => Game, { nullable: true })
	game?: Game

	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[]
}

@InputType()
export class gameInput {
	@Field()
	name: string
	@Field()
	developer: string
	@Field()
	category: string
	@Field()
	description: string
	@Field()
	price: number
	@Field()
	releaseDate: Date
}

@Resolver(Game)
export class gameResolver {
	@Query(() => Game, { nullable: true })
	async getGameById(@Arg('id') id: number) {
		const game = await Game.findOne(id)
		return game
	}

	@Mutation(() => GameResponse)
	async addGame(@Arg('options') options: gameInput): Promise<GameResponse> {
		const errors = validateGameForm(options)
		if (errors) {
			return { errors }
		}

		let game
		try {
			const result = await getConnection()
				.createQueryBuilder()
				.insert()
				.into(Game)
				.values({
					name: options.name,
					category: options.category,
					description: options.description,
					developer: options.developer,
					releaseDate: options.releaseDate,
					price: options.price,
				})
				.returning('*')
				.execute()

			game = result.raw[0]
		} catch (error) {
			if (error.code === '23505') {
				return {
					errors: [
						{
							field: 'name',
							message: 'this name already exists',
						},
					],
				}
			}
		}
		console.log({ game })
		return { game }
	}

	@Mutation(() => GameResponse)
	async updateGame(
		@Arg('id') id: number,
		@Arg('options') options: gameInput
	): Promise<GameResponse> {
		const errors = validateGameForm(options)
		if (errors) {
			return { errors }
		}

		let game
		try {
			const result = await getConnection()
				.createQueryBuilder()
				.update(Game)
				.set({
					name: options.name,
					category: options.category,
					description: options.description,
					developer: options.developer,
					releaseDate: options.releaseDate,
					price: options.price,
				})
				.where({ id })
				.returning('*')
				.execute()

			game = result.raw[0]
		} catch (error) {
			if (error.code === '23505') {
				return {
					errors: [
						{
							field: 'name',
							message: 'this name already exists',
						},
					],
				}
			}
		}
		return { game }
	}

	@Mutation(() => Boolean)
	async deleteGame(@Arg('id') id: number): Promise<Boolean> {
		await Game.delete(id)
		return true
	}
}
