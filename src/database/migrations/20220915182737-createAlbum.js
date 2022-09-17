'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('albums', {
      id: {
        type: Sequelize.UUID,
        defaltValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      release: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      band_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "bands",
          },
          key: "id"
        },
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('members')
  }
}
