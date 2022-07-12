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
      this.hasMany(models.discente, { as : "discentes"}),
      this.hasMany(models.docente, { as : "docentes"}),
      this.hasOne(models.curso, { as : "cursos"})
    }
  }
  tcc.init({
    titulo: DataTypes.STRING,
    discente: DataTypes.INTEGER,
    docente: DataTypes.INTEGER,
    data_apresentacao: DataTypes.DATE,
    resumo: DataTypes.STRING,
    palavras_chave: DataTypes.STRING,
    curso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tcc',
  });
  return tcc;
};