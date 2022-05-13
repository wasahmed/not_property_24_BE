const config = require("./dbconfig");
const mysql = require('mysql');

function connect(){
    try{
        let con = mysql.createConnection(config);
        console.log('Connected...')
        return con;
    }catch(err){
        console.log(err);
    }
}

module.exports = { connect };