import {
	Arg,
	Field,
	InputType,
	Mutation,
	ObjectType,
	Query,
	Resolver,
} from 'type-graphql'
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
	price: string
	@Field()
	releaseDate: Date
	@Field()
	OPId: number
}

@Resolver(Game)
export class gameResolver {
	@Query(() => Game, { nullable: true })
	async getGameById(@Arg('id') id: number) {
		const game = await Game.findOne(id)
		return game
	}

	@Query(() => [Game], { nullable: true })
	async selectGames() {
		const result = await Game.find()
		return result
	}

	@Mutation(() => GameResponse)
	async addGame(@Arg('options') options: gameInput): Promise<GameResponse> {
		const errors = validateGameForm(options)
		if (errors) {
			return { errors }
		}

		let game
		try {
			const result = await Game.createQueryBuilder()
				.insert()
				.into(Game)
				.values({
					name: options.name,
					category: options.category,
					description: options.description,
					developer: options.developer,
					releaseDate: options.releaseDate,
					price: options.price,
					OPId: options.OPId,
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
			const result = await Game.createQueryBuilder()
				.update(Game)
				.set({
					name: options.name,
					category: options.category,
					description: options.description,
					developer: options.developer,
					releaseDate: options.releaseDate,
					price: options.price,
					OPId: options.OPId,
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
