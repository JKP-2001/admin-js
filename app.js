require('dotenv').config();
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const app = express();
app.use(express.json());
app.use('/public', express.static('public'));

const PORT = 3000

let dbURI;
if (process.env.NODE_ENV === "production") {
  dbURI = process.env.PROD_MONGO_URI;
} else {
  dbURI = process.env.DEV_MONGO_URI;
}
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

app.use("/admin", require("./routes/admin.router"));
app.use("",require("./routes/adminRoutes"));


const start = async () => {

    app.listen(PORT, () => {
        console.log(`AdminJS started on http://localhost:${PORT}/admin`)

    })
}

start()