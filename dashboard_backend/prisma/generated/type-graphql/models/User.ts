import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../scalars'
import { Game } from '../models/Game'
import { UserCount } from '../resolvers/outputs/UserCount'

@TypeGraphQL.ObjectType('User', {
	isAbstract: true,
})
export class User {
	@TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
		nullable: false,
	})
	id!: number

	@TypeGraphQL.Field((_type) => String, {
		nullable: false,
	})
	name!: string

	@TypeGraphQL.Field((_type) => String, {
		nullable: false,
	})
	email!: string

	password?: string

	@TypeGraphQL.Field((_type) => String, {
		nullable: false,
	})
	country!: string

	postedGames?: Game[]

	createdAt?: Date

	updatedAt?: Date

	@TypeGraphQL.Field((_type) => UserCount, {
		nullable: false,
	})
	_count?: UserCount
}
