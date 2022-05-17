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


// Listing Types
async function findAllListingType() {
  try{
    const connection = sql.connect();
    let res;
    connection.query("SELECT * FROM ListingType", function (error, results) {
      if (error) throw error;
      res = results
    } );
    console.log(res);
    return {message:"Hello"};
  }catch(err){
    console.log(err);
  }
}

// Property Types
async function findAllPropertyType() {
  try {
    const connection = sql.connect();
    let res = connection.query("SELECT * FROM PropertyType");
    return res;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { select, selectWhere };