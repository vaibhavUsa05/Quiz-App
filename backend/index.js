const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// Call cors() to get the middleware function
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const router = require("./routers/routes");
app.use("/users",router)


app.listen(5000, () => {
  console.log("The server is listening on port 5000");
});
