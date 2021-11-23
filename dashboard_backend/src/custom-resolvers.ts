import { User } from '../prisma/generated/type-graphql'
import {
	Arg,
	Ctx,
	Field,
	InputType,
	Mutation,
	ObjectType,
	Resolver,
} from 'type-graphql'
import { MyContext } from './types'
import { validateRegisterForm } from './utils/resolverValidation'
import { UserInputType, FieldError } from './utils/typegqlstuff'

@ObjectType()
class UserResponse {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[]

	@Field(() => User, { nullable: true })
	user?: User
}

// @Resolver((of) => User)
@Resolver(User)
export default class CustomUserResolvers {
	// @FieldResolver((type) => FieldError, { nullable: true })
	// async errors(
	// 	@Root() user: User,
	// 	@Ctx() { prisma }: MyContext
	// ): Promise<FieldError | null> {
	// 	const errors = validateRegisterForm(user)
	// 	if (errors) {
	// 		return errors
	// 	}
	// 	return null
	// }

	@Mutation(() => UserResponse)
	async login(
		@Arg('email') email: string,
		@Arg('password') password: string,
		@Ctx() { prisma }: MyContext
	): Promise<UserResponse> {
		const user = await prisma.user.findFirst({ where: { email } })

		if (!user) {
			return {
				errors: [
					{
						field: 'email',
						message: "that email doesn't exist",
					},
				],
			}
		}
		if (password !== user.password) {
			return {
				errors: [
					{
						field: 'password',
						message: 'incorrect password',
					},
				],
			}
		}
		return { user }
	}

	@Mutation(() => UserResponse)
	async register(
		@Arg('options') options: UserInputType,
		@Ctx() { prisma }: MyContext
	): Promise<UserResponse> {
		const errors = validateRegisterForm(options)
		if (errors) {
			return { errors }
		}

		let user
		try {
			user = await prisma.user.create({
				data: {
					name: options.name,
					email: options.email,
					password: options.password!,
					country: options.country,
				},
			})
		} catch (error) {
			if (error.code === '23505') {
				return {
					errors: [
						{
							field: 'email',
							message: 'that email is already in use',
						},
					],
				}
			}
		}
		return { user }
	}
}
