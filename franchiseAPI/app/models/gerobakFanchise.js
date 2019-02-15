module.exports = (sequelize, Sequelize) => {
    const gerobakFranchise = sequelize.define('franchise_gerobakFranchise', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        code_no: {
          type: Sequelize.STRING
        }
        franchise_id: {
            type: Sequelize.INTEGER
        },
        gerobak_id: {
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

    return gerobakFranchise;
}
