const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    heightMin:{
      type: DataTypes.INTEGER,
      allowNull:true,

    },
    

    heightMax:{
      type: DataTypes.INTEGER,
      allowNull:true,

    },


    weightMin:{
      type:  DataTypes.INTEGER,
      allowNull: true,
    }, 

     weightMax:{
      type:  DataTypes.INTEGER,
      allowNull: true,
    }, 

    life_spanMax: {
      type: DataTypes.STRING,
    },
    life_spanMin: {
      type: DataTypes.STRING,
    },

    img:{
      type: DataTypes.STRING,
      allowNull:true,
    },

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }, 

  });
};
