import { ObjectType, Field } from 'type-graphql'
import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	OneToMany,
} from 'typeorm'
import Game from './Game'

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ unique: true })
	name!: string

	@Field()
	@Column({ unique: true })
	email!: string

	@Column()
	password!: string

	@Column()
	country!: string

	@OneToMany(() => Game, (game) => game.OP)
	postedGames: Game[]

	@CreateDateColumn()
	createdAt: Date

	@CreateDateColumn()
	updatedAt: Date
}
