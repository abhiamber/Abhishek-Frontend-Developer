require("dotenv").config();
const connect = require("./config/db");
const express = require("express");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const app = express();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
app.use(cors());
app.use(express.json());

const UserRoutes = require("./routes/user.routes");
const validator = require("./Middleware/validator");

app.get("/", (req, res) => {
  return res.send("working fine................");
});

app.use("/user", UserRoutes);
// app.use(validator);
app.get("/capsules", async (req, res) => {
  try {
    let response = await fetch("https://api.spacexdata.com/v3/capsules");
    let data = await response.json();
    res.send({ messg: data, status: "Ok" });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, async (req, res) => {
  await connect();
  console.log("working");
});
