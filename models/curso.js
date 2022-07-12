'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.docente, { as : "docente"}),
      this.belongsTo(models.discente, { as : "discente"}),
      this.belongsTo(models.tcc, { as : "tcc"})
    }
  }
  curso.init({
    nome: DataTypes.STRING,
    duracao: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'curso',
  });
  return curso;
};