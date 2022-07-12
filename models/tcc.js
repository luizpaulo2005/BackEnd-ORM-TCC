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
    }
  }
  tcc.init({
    titulo: DataTypes.STRING,
    discente: DataTypes.STRING,
    docente: DataTypes.STRING,
    data_apresentacao: DataTypes.DATE,
    resumo: DataTypes.STRING,
    palavras_chave: DataTypes.STRING,
    curso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tcc',
  });
  return tcc;
};