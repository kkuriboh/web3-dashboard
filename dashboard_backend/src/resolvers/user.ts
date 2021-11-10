import { User } from '../entities/User'
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
import { validateUserForm } from '../utils/resolverValidation'
import FieldError from '../utils/Fielderror'

@ObjectType()
class UserResponse {
	@Field(() => User, { nullable: true })
	user?: User

	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[]
}

@InputType()
export class userInput {
	@Field()
	email: string
	@Field()
	name: string
	@Field()
	password: string
	@Field()
	country: string
}

@Resolver(User)
export class userResolver {
	@Query(() => [User], { nullable: true })
	async getUsers() {
		const users = await User.find()
		return users
	}

	@Query(() => User, { nullable: true })
	async getUserById(@Arg('id') id: number) {
		const user = await User.findOne(id)
		return user
	}

	@Mutation(() => UserResponse)
	async register(@Arg('options') options: userInput): Promise<UserResponse> {
		const errors = validateUserForm(options)
		if (errors) {
			return { errors }
		}
		let user
		try {
			const result = await getConnection()
				.createQueryBuilder()
				.insert()
				.into(User)
				.values({
					name: options.name,
					email: options.email,
					password: options.password,
					country: options.country,
				})
				.returning('*')
				.execute()

			user = result.raw[0]
		} catch (error) {
			if (error.code === '23505') {
				return {
					errors: [
						{
							field: 'username',
							message: 'username already taken',
						},
					],
				}
			}
		}
		return { user }
	}

	@Mutation(() => UserResponse)
	async updateUser(
		@Arg('id') id: number,
		@Arg('options') options: userInput
	): Promise<UserResponse> {
		const errors = validateUserForm(options)
		if (errors) {
			return { errors }
		}
		let user
		try {
			const result = await getConnection()
				.createQueryBuilder()
				.update(User)
				.set({
					name: options.name,
					email: options.email,
					password: options.password,
					country: options.country,
				})
				.where({ id })
				.returning('*')
				.execute()

			user = result.raw[0]
		} catch (error) {
			if (error.code === '23505') {
				return {
					errors: [
						{
							field: 'username',
							message: 'username already taken',
						},
					],
				}
			}
		}
		return { user }
	}

	@Mutation(() => Boolean)
	async deleteUser(@Arg('id') id: number): Promise<Boolean> {
		await User.delete(id)
		return true
	}
}
