require("dotenv").config();
// const connect = require("./config/db");
const express = require("express");
const PORT = process.env.PORT || 5000;
// const chats = require("./data/data");
const cors = require("cors");
// DB_URL=mongodb+srv://abhiamber:abhiamber@cluster0.5y3p60r.mongodb.net/?retryWrites=true&w=majority

// TOKEN_KEY=secretpassword

const app = express();
app.use(cors());
app.use(express.json());


// const UserRoutes = require("./routes/user.routes");
// const ChatRoutes = require("./routes/chat.route");
// const MessageRouter = require("./routes/message.route");

app.get("/", (req, res) => {
  return res.send("working fine................");
});

// app.use("/user", UserRoutes);
// app.use("/chat", ChatRoutes);
// app.use("/message", MessageRouter);


app.listen(PORT, async (req, res) => {
//   await connect();
  console.log("working");
});
