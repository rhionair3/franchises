module.exports = (sequelize, Sequelize) => {
    const Aturan = sequelize.define('employees_roles', {
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

    return Aturan;
}