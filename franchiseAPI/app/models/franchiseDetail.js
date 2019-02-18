module.exports = (sequelize, Sequelize) => {
    const franchiseDetail = sequelize.define('users_shipping_address', {
        user_id: {
            type: Sequelize.INTEGER
        },
        province_id: {
            type: Sequelize.INTEGER
        },
        regency_id: {
            type: Sequelize.INTEGER
        },
        district_id: {
            type: Sequelize.INTEGER
        },
        postal_id: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        owner: {
            type: Sequelize.DATE
        },
        address: {
            type: Sequelize.TEXT
        },
        contact_no: {
            type: Sequelize.STRING
        },
        isDefault: {
            type: Sequelize.INTEGER
        },
        isDeleted: {
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

    return franchiseDetail;
}