'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('songwriters', {
      id: {
        type: Sequelize.UUID,
        defaltValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      song_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "songs",
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
    return await queryInterface.dropTable('songwriters')
  }
}
