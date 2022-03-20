const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {readdirSync} = require('fs')
require("dotenv").config()


//app instantiation
const app = express()

//database connection
/*const DB = process.env.DATABASE_LOCAL || process.env.DATABASE_PRODUCTION
mongoose.connect(DB, {
    useNewUrlParser: true,
})
.then(() => console.log('DB Connection Successful!'))
.catch((err) => console.log("DB CONNECTION ERR", err));*/

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors())

//routes middlew reads all routes from routes folder
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//shutdown server gracefully and restart server 
process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log('UNCAUGHT EXCEPTION! Shutting Down....')
    process.exit(1);
})



// port
const port = process.env.PORT || 8000;

const server = app.listen(port, () => console.log(`Server is running on port ${port}`));



process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLER REJECTION! Shutting Down....')
    server.close(() => {
        process.exit(1);
    })
})

process.on('SIGTERM', () => {
    console.log('SIGTERM RECEIVED. Shutting Down gracefully');
    server.close(() => {
        console.log('Process terminated!')
    })
})
