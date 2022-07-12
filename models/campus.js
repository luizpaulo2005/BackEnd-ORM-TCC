'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.docente, { as : "docente"}),
      this.belongsTo(models.discente, { as : "discente"})
    }
  }
  campus.init({
    nome: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    contato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'campus',
  });
  return campus;
};