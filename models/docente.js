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
      this.hasOne(models.campus, { as : "campuses"})
    }
  }
  docente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    datanascimento: DataTypes.DATE,
    formacao: DataTypes.STRING,
    campus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'docente',
  });
  return docente;
};