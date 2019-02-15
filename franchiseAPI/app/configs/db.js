const brambangENV = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(brambangENV.database, brambangENV.username, brambangENV.password, {
    host: brambangENV.host,
    dialect: brambangENV.dialect,
    operatorsAliases: false,

    pool: {
        max: brambangENV.max,
        min: brambangENV.pool.min,
        acquire: brambangENV.pool.acquire,
        idle: brambangENV.pool.idle
    }
});

const brambangDB = {};

brambangDB.Sequelize = Sequelize;
brambangDB.sequelize = sequelize;

brambangDB.pengguna = require('../models/users.js')(sequelize, Sequelize);
brambangDB.aturan = require('../models/user_roles.js')(sequelize, Sequelize);
brambangDB.franchise = require('../models/franchise.js')(sequelize, Sequelize);
brambangDB.gerobak = require('../models/gerobak.js')(sequelize, Sequelize);
brambangDB.koki = require('../models/koki.js')(sequelize, Sequelize);
brambangDB.training = require('../models/training.js')(sequelize, Sequelize);
brambangDB.sertifikat = require('../models/sertifikat.js')(sequelize, Sequelize);
brambangDB.gerobakFranchise = require('../models/gerobakfranchise.js')(sequelize, Sequelize);
brambangDB.franchiseDetail = require('../models/franchiseDetail.js')(sequelize, Sequelize);

brambangDB.aturan.belongToMany(brambangDB.pengguna, {through: 'user_user_roles', foreignKey: 'id_role', otherKey: 'id_user'});
brambangDB.pengguna.belongToMany(brambangDB.aturan, {through: 'role_user_roles', foreignKey: 'id_user', otherKey: 'id_role'});

brambangDB.franchise.hasMany(brambangDB.gerobakFranchise, {foreignKey:'idfranchise', sourceKey: 'id'});
brambangDB.gerobakFranchise.belongTo(brambangDB.gerobak, {foreignKey:'gerobak_id', sourceKey: 'id'});
brambangDB.franchiseDetail.belongTo(brambangDB.franchise, {foreignKey:'user_id', sourceKey: 'id'});

module.exports = brambangDB;