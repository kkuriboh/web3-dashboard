import { User } from '../entities/User'
import {
	Arg,
	// Ctx,
	Field,
	InputType,
	Mutation,
	ObjectType,
	Query,
	Resolver,
} from 'type-graphql'
import {
	validateLogin,
	validateRegisterForm,
} from '../utils/resolverValidation'
import FieldError from '../utils/Fielderror'
// import { MyContext } from '../types'
// import { sendRefreshToken } from '../utils/sendTokens'
// import { createAccessToken, createRefreshToken } from '../utils/auth'

@ObjectType()
class UserResponse {
	@Field(() => User, { nullable: true })
	user?: User

	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[]
}

@ObjectType()
class LoginResponse {
	// @Field(() => String)
	// accessToken?: string

	@Field(() => User)
	user?: User

	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[]
}

@InputType()
export class userInput {
	@Field()
	email: string
	@Field()
	name?: string
	@Field()
	password: string
	@Field()
	country?: string
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
		const errors = validateRegisterForm(options)
		if (errors) {
			return { errors }
		}
		let user
		try {
			const result = await User.createQueryBuilder()
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
		const errors = validateRegisterForm(options)
		if (errors) {
			return { errors }
		}
		let user
		try {
			const result = await User.createQueryBuilder()
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

	@Mutation(() => LoginResponse)
	async login(
		@Arg('email') email: string,
		@Arg('password') password: string
		// @Ctx() { res }: MyContext
	): Promise<LoginResponse> {
		const user = await User.findOne({ where: { email } })
		if (!user) {
			return {
				errors: [
					{
						field: 'email',
						message: "user doesn't exist",
					},
				],
			}
		}

		const errors = validateLogin({ email, password })
		if (errors) {
			return { errors }
		}

		// sendRefreshToken(res, createRefreshToken(user))

		// const accessToken = createAccessToken(user)
		// console.log({ accessToken })

		return { user }
	}

	// @Mutation(() => Boolean)
	// logout(@Ctx() { res }: MyContext) {
	// 	sendRefreshToken(res, '')

	// 	return true
	// }

	// @Mutation(() => Boolean)
	// invalidateTokens(@Ctx() { req }: any) {
	// 	if (!req.userId) {
	// 		return false
	// 	}
	// 	const user = User.findOne(req.userId)
	// 	if (!user) {
	// 		return false
	// 	}
	// 	return true
	// }

	@Mutation(() => Boolean)
	async deleteUser(@Arg('id') id: number): Promise<Boolean> {
		await User.delete(id)
		return true
	}
}
