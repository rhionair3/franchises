const env = {
    database: 'franchise',
    username: 'root',
    password: 'P4ssw0rd!',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;
