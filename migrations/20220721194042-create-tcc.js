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
      discenteId: {
        type: Sequelize.INTEGER,
        references: {model:"discentes", key: "id"}
      },
      docenteId: {
        type: Sequelize.INTEGER,
        references: {model:"docentes", key: "id"}
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
      cursoId: {
        type: Sequelize.INTEGER,
        references: {model:"cursos", key: "id"}
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