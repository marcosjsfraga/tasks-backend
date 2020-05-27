module.exports = {
	client: 'postgresql',
	connection: {
		database: 'tasks',
		user: 'declabs',
		password: '1q2w3e'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
