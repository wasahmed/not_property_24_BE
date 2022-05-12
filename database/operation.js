const config = require("./dbconfig");
const sql = require('mssql');

async function connect(){
    try{
        let pool = await sql.connect(config);
        console.log('Connected...')
        return pool;
    }catch(err){
        console.log(err);
    }
}
module.exports = { connect };