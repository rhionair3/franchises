module.exports = (sequelize, Sequelize) => {
    const Provincy = sequelize.define('provinces', {
        name: {
            type: Sequelize.STRING
        },
        isCoverageArea: {
            type: Sequelize.INTEGER
        },
        orders: {
            type: Sequelize.INTEGER
        },

    }, {
        timestamps: false
    });

    return Provincy;
};