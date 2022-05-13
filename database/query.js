const sql = require("./operation");

// Listing Types
async function findAllListingType() {
  try{
    const connection = sql.connect();
    let res = connection.query("SELECT * FROM ListingType");
    return res;
  }catch(err){
    console.log(err);
  }
}

// Property Types
async function findAllPropertyType() {
  try {
    const connection = sql.connect();
    let res = onnection.query("SELECT * FROM PropertyType");
    return res;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { findAllListingType, findAllPropertyType };