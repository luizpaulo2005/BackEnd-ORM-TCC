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
        type: Sequelize.STRING
      },
      discente: {
        type: Sequelize.STRING
      },
      docente: {
        type: Sequelize.STRING
      },
      data_apresentacao: {
        type: Sequelize.DATE
      },
      resumo: {
        type: Sequelize.STRING
      },
      palavras_chave: {
        type: Sequelize.STRING
      },
      curso: {
        type: Sequelize.STRING
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