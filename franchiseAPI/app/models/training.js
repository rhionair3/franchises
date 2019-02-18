module.exports = (sequelize, Sequelize) => {
    const training = sequelize.define('franchise_training', {
        code: {
            type: Sequelize.STRING
        },
        koki_id: {
            type: Sequelize.INTEGER
        },
        startAt: {
            type: Sequelize.DATE
        }, 
        expireAt: {
            type: Sequelize.DATE
        },
        status: {
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

    return training;
}