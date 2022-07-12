'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('discentes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      datanascimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      campus: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "campuses",
          key: "id"
        }
      },
      curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cursos",
          key: "id"
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
    await queryInterface.dropTable('discentes');
  }
};