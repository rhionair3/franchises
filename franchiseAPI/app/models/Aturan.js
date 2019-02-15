module.exports = (sequelize, Sequelize) => {
    const Aturan = sequelize.define('employees_roles', {
        id: {
            type: Sequelize.INTEGER
        },
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