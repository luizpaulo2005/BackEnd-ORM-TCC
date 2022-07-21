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
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      datanascimento: {
        type: Sequelize.DATE
      },
      cpf: {
        type: Sequelize.STRING
      },
      campusId: {
        type: Sequelize.INTEGER,
        references: {model:"campuses", key: "id"}
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
    await queryInterface.dropTable('discentes');
  }
};