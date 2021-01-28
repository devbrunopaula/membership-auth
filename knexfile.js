module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'auth',
      user: 'postgres',
      password: '',
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,

    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },

    seeds: {
      directory: './database/seeds',
    },
  },
}
