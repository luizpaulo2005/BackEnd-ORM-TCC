'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class discente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  discente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    datanascimento: DataTypes.DATE,
    cpf: DataTypes.STRING,
    campus: DataTypes.STRING,
    curso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'discente',
  });
  return discente;
};