const mysql = require('mysql2');
const { promisify } = require('util');
const mysqlConfig = require('./mysql');

const conexion = mysql.createPool(mysqlConfig);
conexion.getConnection(function (error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log('Conectado Correctamente');
  }
});

conexion.query = promisify(conexion.query);

module.exports = conexion;