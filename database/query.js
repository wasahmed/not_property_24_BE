const sql = require("./connect");

// Get All Properties
async function GetAllListingTypes() {
    const connection = await sql.connect();
    const [results,] = await connection.execute("SELECT * FROM listingtype");
    return results;
}

async function GetAllPropertyTypes() {
    const connection = await sql.connect();
    const [results,] = await connection.execute("SELECT * FROM propertytype");
    return results;
}

module.exports = { GetAllListingTypes, GetAllPropertyTypes };