module.exports = (sequelize, Sequelize) => {
    const Postal = sequelize.define('postals', {
        district_id: {
            type: Sequelize.INTEGER
        },
        postal_code: {
            type: Sequelize.INTEGER
        }

    }, {
        timestamps: false
    });

    return Postal;
};