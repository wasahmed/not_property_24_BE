const query = require("../database/query");

const findAll = async () => {
  const res = await query.findAllListingType();
  console.log(res);
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, result: res }),
  };
};

module.exports = { findAll };