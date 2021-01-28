exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('membership_type').notNullable().defaultTo('basic')
    table.string('first_name')
    table.string('last_name')
    table.timestamps(true, true)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users')
}
