const config = require("./dbconfig");
const mysql = require('mysql');

function connect(){
    try{
        let pool = mysql.createPool(config);
        console.log('Connected...')
        return pool;
    }catch(err){
        console.log(err);
    }
}

module.exports = { connect };