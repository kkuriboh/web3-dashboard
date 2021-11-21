import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
export class FieldError {
	@Field()
	field: string
	@Field()
	message: string
}

@InputType()
export class UserInputType {
	@Field()
	name: string
	@Field()
	password?: string
	@Field()
	confirmPassword?: string
	@Field()
	email: string
	@Field()
	country: string
}

@InputType()
export class GameInputType {
	@Field()
	name: string
	@Field()
	developer: string
	@Field()
	category: string
	@Field()
	description: string
	@Field()
	releaseDate: string
	@Field()
	price: number
}
