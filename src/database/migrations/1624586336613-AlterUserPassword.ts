import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserPassword1624586336613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.addColumn(
             'USERS',
             new TableColumn(
                 { name: 'password', type: 'varchar', isNullable: true })
         );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('USERS', 'password');
    }

}
