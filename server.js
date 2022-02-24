const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");


const path = require("path");

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 3001);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(passport.initialize());

const initializePassport = require("./passport-config");
initializePassport(passport);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("we are connected to the database.");
  })
  .catch((error) => {
    console.log("an error occurred while connecting ot the db", error);
  });

const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/api/user", userRoutes);
app.use("/api/trans", transactionRoutes);
app.use("/api/admin", adminRoutes);

/* app.all("*", (req, res) => {
  res.status(500);
  res.send("Invalid path");
}); */


  /// Serve frontend client/build folder
app.use(express.static(path.join(__dirname, "Frontend_Banking_Asset_Management/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/Frontend_Banking_Asset_Management/build/index.html"));
});
///

app.listen(app.get("port"), () => {
  console.log("Server started on port " + app.get("port"));
});
