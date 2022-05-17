const sql = require("./operation");

// Listing Types
async function findAllListingType() {
  try{
    const connection = sql.connect();
    connection.query("SELECT * FROM ListingType", function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    } );
    return {test:"Hello"};
  }catch(err){
    console.log(err);
  }
}

// Property Types
async function findAllPropertyType() {
  try {
    const connection = sql.connect();
    let res = connection.query("SELECT * FROM PropertyType");
    return res;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { findAllListingType, findAllPropertyType };