import { BaseEntity, Column, Entity } from 'typeorm'

@Entity()
export default class Cookie extends BaseEntity {
	@Column()
	userId: number
	@Column({ unique: true })
	token: string
}
