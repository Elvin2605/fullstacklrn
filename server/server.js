require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");
const authrouter = require("./routes/authroute")
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Database connected!");

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});

connection.on("error", (err) => {
  console.error("Database error:", err);
});

app.use("/api/auth" , authrouter)