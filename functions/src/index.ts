//express
import express = require('express');

//middleware
import cors = require('cors');
import * as bodyParser from "body-parser";

import * as test from "./api/test"

//firebase
import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

const app = express()

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    res.status(400).json({
        error: err.message
    });
});
app.use("/test", test.testRouter);

app.get("*", async (req: express.Request, res: express.Response) => {
    res.status(404).send("This route does not exist.");
});

exports.api = functions.https.onRequest(app);