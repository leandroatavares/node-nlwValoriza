import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1624574077075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'TAGS',
                columns: [
                    {name: 'id', type: 'varchar', isPrimary: true, length: '36'},
                    {name: 'name', type: 'varchar'},
                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'}
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('TAGS');
    }

}
