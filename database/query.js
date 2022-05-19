const sql = require("./connect");

async function GetAllListingTypes() {
    const connection = sql.connect();
    const [results,] = await connection.execute("SELECT * FROM ListingType");
    connection.end();
    return results;
}

async function GetAllPropertyTypes() {
    const connection = sql.connect();
    const [results,] = await connection.execute("SELECT * FROM PropertyType");
    connection.end();
    return results;
}

async function GetImagesForProperty(imageID) {
    const connection = sql.connect();
    const [results,] = await connection.execute(`SELECT * FROM PropertyImage WHERE PropertyID = ${imageID}`);
    connection.end();
    return results;
}

async function GetProperty(id) {
    const connection = sql.connect();
    const [results,] = await connection.execute(`SELECT 
        p.PropertyID,
        p.PropertyName,
        p.Description,
        p.Price,
        p.Size,
        p.NoOfBedrooms,
        p.NoOfBathrooms,
        p.NoOfParkingSpaces,
        p.Furnished,
        p.ListingDate,
        p.OccupationDate,
        ag.FirstName,
        ag.LastName,
        ag.EmailAddress,
        ag.ImageURL,
        ag.PhoneNumber,
        ad.Street,
        ad.Province,
        ad.City,
        ad.Street
        FROM Property p 
            INNER JOIN Agent ag ON ag.AgentID = p.AgentID
            INNER JOIN Address ad ON ad.AddressID = p.AddressID
            INNER JOIN ListingType lt ON lt.ListingTypeID = p.ListingTypeID
            INNER JOIN PropertyType pt ON pt.PropertyTypeID = p.PropertyTypeID
        WHERE p.PropertyID = ${id};`);
    connection.end();
    return results;
}

async function GetAllProperty() {
    const connection = sql.connect();
    const [results,] = await connection.execute(`SELECT 
        p.PropertyID,
        p.PropertyName,
        p.Description,
        p.Price,
        p.Size,
        p.NoOfBedrooms,
        p.NoOfBathrooms,
        p.NoOfParkingSpaces,
        p.Furnished,
        p.ListingDate,
        p.OccupationDate,
        ag.FirstName,
        ag.LastName,
        ag.EmailAddress,
        ag.ImageURL,
        ag.PhoneNumber,
        ad.Street,
        ad.Province,
        ad.City,
        ad.Street
        FROM Property p 
            INNER JOIN Agent ag ON ag.AgentID = p.AgentID
            INNER JOIN Address ad ON ad.AddressID = p.AddressID
            INNER JOIN ListingType lt ON lt.ListingTypeID = p.ListingTypeID
            INNER JOIN PropertyType pt ON pt.PropertyTypeID = p.PropertyTypeID;`);
    connection.end();
    return results;
}

// General Function For Fetching Properties
/* 
add query conditions as an array of json objects in params with the following attributes:
type: the equality type -> EQUAL, GREATER, LESS, or BETWEEN
field: the name of the field 
value: the condition value (EQUAL, GREATER, and LESS only)
min: minimum value (BETWEEN only)
max: maximum value (BETWEEN only)
*/
/*async function GetProperties(){
    let sqlQuery = "SELECT * FROM Property";
    let conditions = arguments[0];
    for (var i=0; i<conditions.length; i++){
        if(i==0){
            sqlQuery = sqlQuery.concat(" WHERE ");
        }else{
            sqlQuery = sqlQuery.concat(" AND ");
        }
        if(conditions[i].type == "EQUAL"){
            sqlQuery = sqlQuery.concat(`${conditions[i].field} = ${conditions[i].value}`);
        }else if (conditions[i].type == "GREATER"){
            sqlQuery = sqlQuery.concat(`${conditions[i].field} > ${conditions[i].value}`);
        }else if (conditions[i].type == "LESS"){
            sqlQuery = sqlQuery.concat(`${conditions[i].field} < ${conditions[i].value}`);
        }else if (conditions[i].type == "BETWEEN"){
            sqlQuery = sqlQuery.concat(`${conditions[i].field} BETWEEN ${conditions[i].min} AND ${conditions[i].max}`);
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
*/

module.exports = { GetAllListingTypes, GetAllPropertyTypes, GetAllProperty, GetProperty, GetImagesForProperty };
