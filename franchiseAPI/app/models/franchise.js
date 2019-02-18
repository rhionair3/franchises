module.exports = (sequelize, Sequelize) => {
    const franchise = sequelize.define('users', {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        emailToken: {
            type: Sequelize.STRING
        },
        emailTokenExpired: {
            type: Sequelize.DATE
        },
        password: {
            type: Sequelize.INTEGER
        },
        resetPasswordToken: {
            type: Sequelize.STRING
        },
        resetPasswordExpired: {
            type: Sequelize.DATE
        },
        fullname: {
            type: Sequelize.STRING
        },
        identity_no: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        mobileToken: {
            type: Sequelize.STRING
        },
        status_mobile: {
            type: Sequelize.INTEGER
        },
        bank_name: {
            type: Sequelize.STRING
        },
        bank_acount_no: {
            type: Sequelize.STRING
        },
        bank_acount_name: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.INTEGER
        },
        provider: {
            type: Sequelize.STRING
        },
        sales_id: {
            type: Sequelize.INTEGER
        },
        role_id: {
            type: Sequelize.INTEGER
        },
        device_id: {
            type: Sequelize.INTEGER
        }

    });

    return franchise;
}