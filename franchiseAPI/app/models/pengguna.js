module.exports = (sequelize, Sequelize) => {
    const Pengguna = sequelize.define('employees', {
        employee_code: {
            type: Sequelize.STRING
        },
        fullname: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        employee_role_id: {
            type: Sequelize.INTEGER
        },
        isActive: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        is_reset_password: {
            type: Sequelize.INTEGER
        }

    });

    return Pengguna;
}