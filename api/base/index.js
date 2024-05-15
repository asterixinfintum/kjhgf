if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

import "regenerator-runtime";
import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import mongoose from 'mongoose';

const app = express();
const server = http.createServer(app);

import messager from './routes/messager';

//import getcryptoprices from './routes/getcryptoprices';

//const allowedOrigins = [`${process.env.baseurl}`, `${process.env.wwwbaseurl}`, "http://localhost:3000"];

app.use(express.urlencoded({
    extended: false
}));

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/trending-presale', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'trendingpresales.html'));
});

app.get('/favicon', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/public/imgs/cropped-CoinGape_logo2-32x32.webp'));
});

app.use(express.static('public'));

app.use(messager);

const PORT = process.env.PORT || 8086;

mongoose.connect(`${process.env.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log('connected to database');

    server.listen(PORT, async (error) => {
        if (error) {
            return error;
        }

        return console.log(`server started on port here now ${PORT}`);
    });
});