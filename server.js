const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const path = require("path");

let environmentFilePath = `${__dirname}/.env.${process.env.NODE_ENV}`;
if(process.env.NODE_ENV) {
  require("dotenv").config(environmentFilePath);
} else {
  require("dotenv").config();
}
console.log("Environment file path " + environmentFilePath);

var corsOptions = {
    origin: process.env.BASE_URL
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static files
app.use(express.static('frontend/dist/theTrader'))

//redirects to index page when the page refreshes
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "theTrader", "index.html"))
});

app.get("/", (req, res) => {
    res.json({message: "Sample route"})
});

// require("./app/")

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})


