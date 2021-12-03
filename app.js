const express = require("express");
const session = require("express-session");
const visitorController = require("./controller/userData");
var bodyParser = require("body-parser");

app = express();
const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin:
      "http://localhost:3000" || "https://brave-mclean-81c070.netlify.app", // where this is where your frontend currently runs.
  })
);

app.set("trust proxy", 1);
// note: secret string should be stored securely in an enviorment variable note code
const store = new session.MemoryStore();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(cookieParser());
app.use(express.json());

app.use(
  session({
    secret: "D53gxl41G",
    name: "anime_session",
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
    store,
  })
);

app.use("/visitor", jsonParser, visitorController);
app.get("/", (request, response) => {
  console.log("whats in req.session:", request.session);
  response.send("Reunion Form");
});

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Listening on Port:", PORT);
});
