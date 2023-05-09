import * as path from 'path';
import { DataSource } from 'typeorm';

/**
 * Used for CLI commands like create, generate or run migrations (see package.json)
 */
export const typeormCliDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'test',
  synchronize: false,
  migrationsRun: false,
  migrations: [`${path.resolve(__dirname, 'migrations/*.{ts,js}')}`],
});
