'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('bands', {
      id: {
        type: Sequelize.UUID,
        defaltValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      foundation: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
      },
      end: {
        type: Sequelize.INTEGER(4),
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('bands')
  }
};
