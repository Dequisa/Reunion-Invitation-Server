const db = require("../db/config.js");

const addUserData = async (userData) => {
  try {
    if (userData === undefined || userData === null || userData === {}) {
      throw "User did not submit sufficient data";
    }
    const newData = await db.one(
      "INSERT INTO reunion (attending, name, email, phoneNumber, socialMedia, noOfGuest, contribution, follow_up) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        userData.attending,
        userData.name,
        userData.email,
        userData.phoneNumber,
        userData.socialMedia,
        userData.noOfGuest,
        userData.contribution,
        userData.follow_up,
      ]
    );
    console.log("logged from adduserdata funct/queries: ", newData);
    return console.log("Insert attempt successful");
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  addUserData,
};
