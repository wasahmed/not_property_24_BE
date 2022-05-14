const sql = require("./connect");

// Get All Properties
async function GetAllListingTypes() {
    const connection = await sql.connect();
    const [results,] = await connection.execute("SELECT * FROM ListingType");
    return results;
}

// Get All Property Types
async function GetAllPropertyTypes() {
    const connection = await sql.connect();
    const [results,] = await connection.execute("SELECT * FROM PropertyType");
    return results;
}

// General Function For Fetching Properties
/* 
add query conditions as json objects in params with the following attributes:
type: the equality type -> EQUAL, GREATER, LESS, or BETWEEN
field: the name of the field 
value: the condition value (EQUAL, GREATER, and LESS only)
min: minimum value (BETWEEN only)
max: maximum value (BETWEEN only)
*/
async function GetProperties(){
    let sqlQuery = "SELECT * FROM Property";
    for (var i=0; i<arguments.length; i++){
        if(i==0){
            sqlQuery = sqlQuery.concat(" WHERE ");
        }else{
            sqlQuery = sqlQuery.concat(" AND ");
        }
        if(arguments[i].type == "EQUAL"){
            sqlQuery = sqlQuery.concat(`${arguments[i].field} = ${arguments[i].value}`);
        }else if (arguments[i].type == "GREATER"){
            sqlQuery = sqlQuery.concat(`${arguments[i].field} > ${arguments[i].value}`);
        }else if (arguments[i].type == "LESS"){
            sqlQuery = sqlQuery.concat(`${arguments[i].field} < ${arguments[i].value}`);
        }else if (arguments[i].type == "BETWEEN"){
            sqlQuery = sqlQuery.concat(`${arguments[i].field} BETWEEN ${arguments[i].min} AND ${arguments[i].max}`);
        }
    }
    sqlQuery = sqlQuery.concat(" ORDER BY ListingDate DESC");
    const connection = await sql.connect();
    const [results,] = await connection.execute(sqlQuery);
    return results;
}

// Get Property Images
async function getImages(propertyID){
    const connection = await sql.connect();
    const [results,] = await connection.execute(`SELECT ImageURL FROM Images WHERE PropertyID = ${propertyID}`);
    return results;
}

// Get Property Address
async function GetAddress(addressID){
    const connection = await sql.connect();
    const [results,] = await connection.execute(`SELECT * FROM Address WHERE AddressID = ${addressID} `);
    return results;
}

module.exports = { GetAllListingTypes, GetAllPropertyTypes, GetProperties, getImages, GetAddress };
