'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('artist', {
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
      born: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      death: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      instrument: {
        type: Sequelize.ENUM({
          values: ['vocal', 'guitar', 'bass', 'drums', 'keyboard', 'percussion', 'other']
      }),
        allowNull: false,
      },
      secondInstrument: {
        type: Sequelize.ENUM('vocal', 'guitar', 'bass', 'drums', 'keyboard', 'percussion', 'other'),
        allowNull: true,
      },
      otherInstrument: {
        type: Sequelize.ENUM('vocal', 'guitar', 'bass', 'drums', 'keyboard', 'percussion', 'other'),
        allowNull: true,
      },
      songwriter: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      producer: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('artist');
  }
};
