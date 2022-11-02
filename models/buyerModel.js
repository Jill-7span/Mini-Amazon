 // require module
 const express = require('express');

 const app = express();

 
 

 // define model

 module.exports = (sequelize , DataTypes)=>{
    const buyer = sequelize.define('buyers', {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name:{
            type:DataTypes.STRING(100)
        },
        last_name:{
            type:DataTypes.STRING(100)
        },
        contact_num:{
            type:DataTypes.INTEGER(10)
        },
        email:{
            type:DataTypes.STRING(100)
        },
        password:{
            type:DataTypes.STRING(225)
        },     
    },{
        timestamps:false,
    })
    return buyer;
};


