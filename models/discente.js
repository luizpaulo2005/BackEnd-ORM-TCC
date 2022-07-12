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
      this.hasOne(models.curso, { as : "cursos"}),
      this.hasOne(models.campus, { as : "campuses"})
    }
  }
  discente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    datanascimento: DataTypes.DATE,
    cpf: DataTypes.STRING,
    campus: DataTypes.INTEGER,
    curso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'discente',
  });
  return discente;
};