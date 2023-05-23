const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports= (sequelize) => {

    sequelize.define('Temperaments', {
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
          },
        createInDb:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true,
         },      
        
    });
}