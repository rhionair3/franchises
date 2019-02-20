module.exports = (sequelize, Sequelize) => {
    const BackAccount = sequelize.define('user_bank_account', {
        role_name: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },

    });

    return BackAccount;
}