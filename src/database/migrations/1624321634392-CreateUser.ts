import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateUser1624321634392 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'USERS',
                columns: [
                    {name: 'id', type: 'varchar', isPrimary: true, length: '36'},
                    {name: 'name', type: 'varchar'},
                    {name: 'email', type: 'varchar'},
                    {name: 'admin', type: 'boolean', default: false},
                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'}
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('USERS');
    }

}
