const userData = require("express").Router();
const { addUserData } = require("../queries/userData.js");

userData.post("/", async (request, response) => {
  if (request.body !== {}) {
    console.log("post controller log", request.body);
    let response = addUserData(request.body);
  }
  response.json({ success: true });
});

module.exports = userData;
