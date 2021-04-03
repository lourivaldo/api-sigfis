import {MigrationInterface, Table, TableIndex, QueryRunner} from "typeorm";

export class User1617469599783 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: "name",
          type: "varchar(150)",
        },
        {
          name: "email",
          type: "varchar(100)",
        },
        {
          name: "created_at",
          type: "timestamp with time zone",
        },
        {
          name: "updated_at",
          type: "timestamp with time zone",
        },
        {
          name: "deleted_at",
          type: "timestamp with time zone",
        }
      ],
    }), true);

    await queryRunner.createIndex("users", new TableIndex({
      name: "IDX_USERS_EMAIL",
      isUnique: true,
      columnNames: ["email", "deleted_at"]
    }));

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex("users", "IDX_USERS_EMAIL");
    await queryRunner.dropTable("users");
  }

}
