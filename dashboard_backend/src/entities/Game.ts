import { Field, Float, Int, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'

@ObjectType()
@Entity()
export default class Game extends BaseEntity {
	@Field(() => Int)
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

	@Field(() => Float)
	@Column()
	price: number

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
