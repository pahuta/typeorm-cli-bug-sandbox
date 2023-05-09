import { MigrationInterface, QueryRunner } from "typeorm"

export class Test1683624796742 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        throw new Error('Oops');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
