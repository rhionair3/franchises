module.exports = (sequelize, Sequelize) => {
    const gerobak = sequelize.define('franchise_gerobaks', {
        code: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATE
        },
        createdBy: {
            type: Sequelize.INTEGER
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        updatedBy: {
            type: Sequelize.INTEGER
        }

    });

    return gerobak;
}
