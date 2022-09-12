'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('members', {
      id: {
        type: Sequelize.UUID,
        defaltValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      stillMember: {
        type: Sequelize.BOOLEAN,
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
      },
      artist_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "artists"
          },
          key: "id",
        }
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('members')
  }
}
