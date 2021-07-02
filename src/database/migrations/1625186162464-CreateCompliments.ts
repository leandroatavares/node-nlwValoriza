import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1625186162464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'COMPLIMENTS',
                columns: [
                    { name: 'id', type: 'varchar', isPrimary: true, length: '36' },
                    { name: 'user_sender', type: 'varchar', length: '36', isNullable: true },
                    { name: 'user_receiver', type: 'varchar', length: '36', isNullable: true },
                    { name: 'tag_id', type: 'varchar', length: '36', isNullable: true },
                    { name: 'message', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp', default: 'now()' }
                ],
                foreignKeys: [
                    {
                        name: 'FKUserSenderCompliments',
                        referencedTableName: 'USERS',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_sender'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKUserReceiverCompliments',
                        referencedTableName: 'USERS',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_receiver'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKTagsCompliments',
                        referencedTableName: 'TAGS',
                        referencedColumnNames: ['id'],
                        columnNames: ['tag_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        );

        // await queryRunner.createForeignKey(
        //     'COMPLIMENTS',
        //     new TableForeignKey({
        //         name: 'FKUserSenderCompliments',
        //         referencedTableName: 'user',
        //         referencedColumnNames: ['id'],
        //         columnNames: ['user_sender'],
        //         onDelete: 'SET NULL',
        //         onUpdate: 'SET NULL'
        //     })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('COMPLIMENTS')
    }

}
