'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class docente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.campus, {as:"campus"})
    }
  }
  docente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    datanascimento: DataTypes.DATE,
    formacao: DataTypes.STRING,
    campusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'docente',
  });
  return docente;
};