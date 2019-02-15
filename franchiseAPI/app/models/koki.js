module.exports = (sequelize, Sequelize) => {
    const koki = sequelize.define('franchise_koki', {
        id: {
            type: Sequelize.INTEGER
        },
        code: {
            type: Sequelize.STRING
        },
        franchise_id: {
            type: Sequelize.INTEGER
        },
        identity_id: {
            type: Sequelize.STRING
        },
        fullname: {
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

    return koki;
}