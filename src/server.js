const express = require("express");
// const mongoose = require("mongoose");
const connect = require("./configs/db");
const app = express();

//controller import
const userController = require("./controller/user.controller");

//middlewares
app.use(express.json());
app.use("/users", userController);

let port = 8282;

// const start = async () => {
//   await connect();
//   app.listen(port, () => {
//     console.log("listing to port " + port);
//   });
// };
app.listen(port, async function(){
    await connect();
    console.log("server is live now on port ",port)
})
// module.exports = start;