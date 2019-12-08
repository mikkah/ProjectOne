import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1575800383380 implements MigrationInterface {
    name = 'myInit1575800383380'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "createdData" TO "createdDate"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "createdDate" TO "createdData"`, undefined);
    }

}
