const query = require("../database/query");

const get = async (event, context, callback) => {
  const id = event.pathParameters.id;
  const result = await query.selectWhere(
    "SELECT * FROM PropertyImage WHERE PropertyImageID = ?",
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

const list = async (event, context, callback) => {
  if (!event.queryStringParameters && !event.queryStringParameters) {
    const result = await query.select("SELECT * FROM PropertyImage");
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({ success: true, result: result }),
    };
  }

  if (event.queryStringParameters) {
    const { propertyId } = event.queryStringParameters;
    let result = await query.call("findPropertyImages(?)", [propertyId]);
    result = result[0]
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({ success: true, result: result }),
    };
  }
};

module.exports = { list, get };
