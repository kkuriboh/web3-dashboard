import { MigrationInterface, QueryRunner } from 'typeorm'

export class firstMigration1634241382339 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('')
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
