const query = require("../database/query");

const get = async (event, context, callback) => {
  const id = event.pathParameters.id;
  const result = await query.selectWhere(
    "SELECT * FROM PropertyType WHERE PropertyTypeID = ?",
    [id]
  );
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({ success: true, result: result }),
  };
};

const list = async () => {
  const result = await query.select("SELECT * FROM PropertyType");
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({ success: true, result: result }),
  };
};

module.exports = { list, get };