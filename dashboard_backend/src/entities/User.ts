import { ObjectType, Field } from 'type-graphql'
import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
} from 'typeorm'

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

	@Field(() => String)
	@CreateDateColumn()
	createdAt: Date

	@Field(() => String)
	@CreateDateColumn()
	updatedAt: Date

	// @Column('int', { default: 0 })
	// tokenVersion: number
}
