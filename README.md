# typeorm-cli-bug-sandbox

## Steps to reproduce

1. Install dependencies: `npm ci`.
2. Modify TypeORM data source options in "src/typeorm-cli.data-source.ts" to connect to DB.
3. Execute `npm run migration:run`

## Actual behavior:

"Process finished with exit code 0"

```shell
/Users/siarheipakhuta/.nvm/versions/node/v16.19.1/bin/npm run migration:run

> migration:run
> typeorm-ts-node-esm -d src/typeorm-cli.data-source.ts migration:run

query: SELECT * FROM current_schema()
query: SELECT version();
query: SELECT * FROM "information_schema"."tables" WHERE "table_schema" = 'public' AND "table_name" = 'migrations'
query: CREATE TABLE "migrations" ("id" SERIAL NOT NULL, "timestamp" bigint NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id"))
query: SELECT * FROM "migrations" "migrations" ORDER BY "id" DESC
0 migrations are already loaded in the database.
1 migrations were found in the source code.
1 migrations are new migrations must be executed.
query: START TRANSACTION
query: ROLLBACK
Error during migration run:
Error: Oops
    at Test1683624796742.up (/Users/siarheipakhuta/projects/typeorm-cli-bug-sandbox/src/migrations/1683624796742-test.ts:6:15)
    at MigrationExecutor.executePendingMigrations (/Users/siarheipakhuta/projects/typeorm-cli-bug-sandbox/node_modules/src/migration/MigrationExecutor.ts:337:32)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async DataSource.runMigrations (/Users/siarheipakhuta/projects/typeorm-cli-bug-sandbox/node_modules/src/data-source/DataSource.ts:397:13)
    at async Object.handler (/Users/siarheipakhuta/projects/typeorm-cli-bug-sandbox/node_modules/src/commands/MigrationRunCommand.ts:76:13)

Process finished with exit code 0
```

## Expected behavior:

"Process finished with exit code 1" because migration execution failed.
