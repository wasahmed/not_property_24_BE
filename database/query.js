const sql = require("./operation");


function select(sqlStatement){
  return new Promise((resolve, reject)=>{
    // let sqlStatement = `SELECT ${attribute} FROM ${table}`;
    let query = sql.pool.getConnection((err, connection) => {
      if (err) throw reject(err);
      connection.query(sqlStatement, (err, result) => {
        connection.release();
        if (err) throw reject(err);
        resolve(Object.values(JSON.parse(JSON.stringify(result))));
        connection.destroy();
      });
    });
  });
}

function selectWhere(sqlStatement,params){
  return new Promise((resolve, reject)=>{
    // let sqlStatement = `SELECT ${attribute} FROM ${table} WHERE ${condition}`;
    let query = sql.pool.getConnection((err, connection) => {
      if (err) throw reject(err);
      connection.query(sqlStatement,params, (err, result) => {
        connection.release();
        if (err) throw reject(err);
        resolve(Object.values(JSON.parse(JSON.stringify(result))));
        connection.destroy();
      });
    });
  });
}

function call(proc,params){
  const sqlStatement = `CALL ${proc}`
  return new Promise((resolve, reject)=>{
    // let sqlStatement = `SELECT ${attribute} FROM ${table} WHERE ${condition}`;
    let query = sql.pool.getConnection((err, connection) => {
      if (err) throw reject(err);
      connection.query(sqlStatement,params, (err, result) => {
        connection.release();
        if (err) throw reject(err);
        resolve(Object.values(JSON.parse(JSON.stringify(result))));
        connection.destroy();
      });
    });
  });
}



module.exports = { select, selectWhere, call };