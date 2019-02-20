module.exports = (sequelize, Sequelize) => {
    const District = sequelize.define('districts', {
        regency_id: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        area_code: {
            type: Sequelize.INTEGER
        }

    }, {
        timestamps: false
    });

    return District;
};