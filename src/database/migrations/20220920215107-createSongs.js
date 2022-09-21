'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('songs', {
      id: {
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      subtitle: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      track: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      album_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "albums",
          },
          key: "id"
        },
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('songs')
  }
}
