import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pg from 'pg';
import axios from 'axios';
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import env from 'dotenv';

// Load environment variables
env.config();

//create app
const app = express();
const port = 5000;
// app.use(express.static(join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Database connection
const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

db.connect();



app.get("/api/getFavorites", async (req, res) => {
    try {
        const result = await db.query("SELECT beer_id FROM favorites");
        console.log(result.rows);
        res.send(result.rows);
    }
    catch (err) {
        console.log(err);
    }
});

app.get("/api/isFavorite", async (req, res) => {
    const beerId = req.query.id;
    console.log("beer id", beerId);
    try {
        const result = await db.query(`SELECT beer_id FROM favorites WHERE beer_id = ${beerId}`);
        console.log(result.rows);

        if (result.rows.length === 0) {
            res.send(false)
        } else {
            res.send(true)
        }
    }
    catch (err) {
        console.log(err);
    }

});


app.post("/api/setFavorite", async (req, res) => {
    const beerId = req.body.id;
    const isFavorite = req.body.isFavorite;
    try {
        if (isFavorite) {
            await db.query(`INSERT INTO favorites (beer_id) VALUES (${beerId})`);
        } else {
            await db.query(`DELETE FROM favorites WHERE beer_id = ${beerId}`);
        }
        res.send("Success");
    }
    catch (err) {
        console.log(err);
    }

});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});