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

brambangDB.pengguna = require('../models/pengguna.js')(sequelize, Sequelize);
brambangDB.aturan = require('../models/aturan.js')(sequelize, Sequelize);
brambangDB.franchise = require('../models/franchise.js')(sequelize, Sequelize);
brambangDB.gerobak = require('../models/gerobak.js')(sequelize, Sequelize);
brambangDB.koki = require('../models/koki.js')(sequelize, Sequelize);
brambangDB.training = require('../models/training.js')(sequelize, Sequelize);
brambangDB.sertifikat = require('../models/sertifikat.js')(sequelize, Sequelize);
brambangDB.gerobakFranchise = require('../models/gerobakFranchise.js')(sequelize, Sequelize);
brambangDB.franchiseDetail = require('../models/franchiseDetail.js')(sequelize, Sequelize);

brambangDB.provincy = require('../models/Provincy.js')(sequelize, Sequelize);
brambangDB.regency = require('../models/Regency.js')(sequelize, Sequelize);
brambangDB.district = require('../models/District.js')(sequelize, Sequelize);
brambangDB.postal = require('../models/Postal.js')(sequelize, Sequelize);

brambangDB.aturan.belongsToMany(brambangDB.pengguna, {through: 'user_user_roles', foreignKey: 'idRole', otherKey: 'idUser'});
brambangDB.pengguna.belongsToMany(brambangDB.aturan, {through: 'role_user_roles', foreignKey: 'idUser', otherKey: 'idRole'});

brambangDB.franchise.hasMany(brambangDB.gerobakFranchise, {foreignKey:'idFranchise', sourceKey: 'id'});
brambangDB.franchise.hasMany(brambangDB.koki, {foreignKey:'franchise_id', sourceKey: 'id'});
brambangDB.gerobakFranchise.belongsTo(brambangDB.gerobak, {foreignKey:'idGerobak', sourceKey: 'id'});
brambangDB.franchiseDetail.belongsTo(brambangDB.franchise, {foreignKey:'user_id', sourceKey: 'id'});
brambangDB.koki.belongsTo(brambangDB.franchise, {foreignKey:'id', sourceKey: 'franchise_id'});


module.exports = brambangDB;
