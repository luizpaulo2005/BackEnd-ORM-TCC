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
      this.belongsTo(models.campus, {as:"campus"}),
      this.belongsTo(models.curso, {as:"curso"}),
      this.hasMany(models.tcc, {as:"tccs"})
    }
  }
  discente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    datanascimento: DataTypes.DATE,
    cpf: DataTypes.STRING,
    campusId: DataTypes.INTEGER,
    cursoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'discente',
  });
  return discente;
};