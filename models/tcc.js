'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tcc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.discente, {as:"discente"}),
      this.belongsTo(models.docente, {as:"docente"}),
      this.belongsTo(models.curso, {as:"curso"})
    }
  }
  tcc.init({
    titulo: DataTypes.STRING,
    discenteId: DataTypes.INTEGER,
    docenteId: DataTypes.INTEGER,
    data_apresentacao: DataTypes.DATE,
    resumo: DataTypes.STRING,
    palavras_chave: DataTypes.STRING,
    cursoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tcc',
  });
  return tcc;
};