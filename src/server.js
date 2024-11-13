const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const configViewEngine = require('./config/viewEngine');
const routes = require('./routes/web')
const connection = require('./config/database')
const { MongoClient } = require('mongodb')
const cookieParser = require('cookie-parser');

const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME

app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

configViewEngine(app)

app.use('/', routes);

connection();
(async () => {
    try {
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);
        const dbName = process.env.DB_NAME;
        await client.connect();
        console.log('Connected successfully to server');
        app.listen(port, hostname, () => {
            console.log(`Web running succeed on port ${port}`);
        })
    } catch (error) {
        console.log('Failed');
    }
})();





