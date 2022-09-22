'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.addColumn("songs", "duration", {
      type: Sequelize.TIME,
      allowNull: false,
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.removeColumn('songs', 'duration')
  }
}