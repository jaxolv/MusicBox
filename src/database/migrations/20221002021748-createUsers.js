'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaltValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      born: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING(3),
        allowNull: true,
      },
      zipCode: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      verifyed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('users');
  }
};
