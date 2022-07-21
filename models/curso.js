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
      // define association here
      this.belongsTo(models.campus, { as: "campuses"})
    }
  }
  curso.init({
    nome: DataTypes.STRING,
    duracao: DataTypes.STRING,
    descricao: DataTypes.STRING,
    campus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'curso',
  });
  return curso;
};