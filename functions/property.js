const query = require("../database/query");

const get = async (event, context, callback) => {
  const id = event.pathParameters.id;
  let result = await query.selectWhere(
    "SELECT * FROM PropertiesView WHERE PropertyID = ?",
    [id]
  );
  let imagesRes = await query.call("findPropertyImages(?)", [id]);
  result = result[0]
  result['PropertyImages'] = imagesRes[0];
 
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
  if (!event.pathParameters && !event.queryStringParameters) {
    const result = await query.select("SELECT * FROM PropertiesView");
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
    const filters = event.queryStringParameters;
    const result = await query.selectWhere("SELECT * FROM PropertiesView");
    const filteredResult = result.filter((property) => {
      let isValid = true;
      for (key in filters) {
        if (key == "Furnished") {
          // let newKey = (filters[key] === "true");
          isValid = isValid && property[key].data == (filters[key] === "true");
        } else {
          isValid = isValid && property[key] == filters[key];
        }
      }
      return isValid;
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result: filteredResult }),
    };
  }
};

module.exports = { list, get };
