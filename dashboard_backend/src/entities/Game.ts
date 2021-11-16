import { Field, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from './User'

@ObjectType()
@Entity()
export default class Game extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: number

	@Field()
	@Column({ unique: true })
	name!: string

	@Field()
	@Column({ unique: true })
	developer: string

	@Field()
	@Column()
	category: string

	@Field()
	@Column()
	description: string

	@Field()
	@Column()
	price: String

	@Column()
	OPId: number

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.postedGames)
	OP: User

	@Field(() => String)
	@CreateDateColumn()
	releaseDate: Date

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date

	@Field(() => String)
	@CreateDateColumn()
	updatedAt: Date
}
