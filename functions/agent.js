const query = require("../database/query");

const get = async (event, context, callback) => {
  const id = event.pathParameters.id;
  const result = await query.selectWhere(
    "SELECT * FROM Agent WHERE AgentID = ?",
    [id]
  );
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, result: result }),
  };
};

const list = async () => {
  const result = await query.select("SELECT * FROM Agent");
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, result: result }),
  };
};

module.exports = { list, get };