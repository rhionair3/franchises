module.exports = (sequelize, Sequelize) => {
    const Regency = sequelize.define('regencies', {
        province_id: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        isCoverageArea: {
            type: Sequelize.INTEGER
        },
        regency_group_id: {
            type: Sequelize.INTEGER
        },

    }, {
        timestamps: false
    });

    return Regency;
};