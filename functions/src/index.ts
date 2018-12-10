//express
import express = require('express');

//middleware
import cors = require('cors');
import * as bodyParser from "body-parser";

import * as test from "./api/test"

//firebase
import * as functions from "firebase-functions";

const app = express()

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    res.status(400).json({
        error: err.message
    });
});
app.use("/test", test.testRouter);

app.get("*", async (Request: express.Request, Response: express.Response) => {
    Response.status(404).send("This route does not exist.");
});

exports.api = functions.https.onRequest(app);