const config = require("./dbconfig");
const mysql = require('mysql2/promise');

function connect(){
    try{
        let con = mysql.createPool(config);
        console.log('Connected...')
        return con;
    }catch(err){
        console.log(err);
    }
}

module.exports = { connect };