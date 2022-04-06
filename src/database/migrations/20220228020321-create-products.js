'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stock_min: {
        type: Sequelize.INTEGER
      },
      stock_max: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      artist: {
        type: Sequelize.STRING
      },
      visibility: {
        type: Sequelize.INTEGER
      },
      IDgenre: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Genres',
            key: 'id'
          }

      },
      IDformat: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Formats',
            key: 'id'
          }

      },
      ID_category: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories',
            key: 'id'
          }
      },
      IDImages: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Images',
            key: 'id'
          }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};