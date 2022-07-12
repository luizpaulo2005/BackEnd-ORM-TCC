'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tccs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      discente: {
        type: Sequelize.INTEGER,
        references: {
          model: "discentes",
          key: "id"
        },
        allowNull: false
      },
      docente: {
        type: Sequelize.INTEGER,
        references: {
          model: "docentes",
          key: "id"
        },
        allowNull: false
      },
      data_apresentacao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      resumo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      palavras_chave: {
        type: Sequelize.STRING,
        allowNull: false
      },
      curso: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('tccs');
  }
};