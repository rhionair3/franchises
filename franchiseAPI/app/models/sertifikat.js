module.exports = (sequelize, Sequelize) => {
    const sertifikat = sequelize.define('franchise_sertifikat', {
        id: {
            type: Sequelize.INTEGER
        },
        code: {
            type: Sequelize.STRING
        },
        koki_id: {
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

    return sertifikat;
}