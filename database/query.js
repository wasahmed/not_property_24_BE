const sql = require("./connect");

// Get All Properties
async function GetAllListingTypes() {
    const connection = await sql.connect();
    const [results,] = await connection.execute("SELECT * FROM ListingType");
    connection.end();
    return results;
}

async function GetAllPropertyTypes() {
    const connection = await sql.connect();
    const [results,] = await connection.execute("SELECT * FROM PropertyType");
    connection.end();
    return results;
}

async function GetPropertyImage() {
    const connection = await sql.connect();
    const [results,] = await connection.execute("SELECT * FROM PropertyImage");
    connection.end();
    return results;
}

async function GetAllProperties() {
    const connection = await sql.connect();
    const [results,] = await connection.execute("SELECT * FROM Property");
    connection.end();
    return results;
}

module.exports = { GetAllListingTypes, GetAllPropertyTypes,GetPropertyImage,GetAllProperties };