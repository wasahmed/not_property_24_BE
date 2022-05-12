const sql = require("./operation");

// Listing Types
async function findAllListingType() {
  try {
    const connection = await sql.connect();
    let res = await connection.query("SELECT * FROM ListingType");
    return res.recordsets;
  } catch (err) {
    console.log(err);
  }
}


// Property Types
async function findAllPropertyType() {
  try {
    const connection = await sql.connect();
    let res = await connection.query("SELECT * FROM PropertyType");
    return res.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { findAllListingType, findAllPropertyType };
