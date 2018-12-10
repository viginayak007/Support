
import express = require('express');
export let testRouter = express.Router();


//firebase
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

testRouter.get("/", async function getTest(Request: express.Request, Response: express.Response) {
    try {
        const snapshot = await db.collection('test').get();
        const test = [];
        const RequestedStatus = (Request.query.status).split(',');//can select one or more status
        snapshot.forEach((doc) => {
            if (RequestedStatus.some(x => x === String(doc.data().status))) {
                test.push({
                    id: doc.id,
                    data: doc.data()
                });
            }
        });
       
        const data = await Promise.all(test);

        Response.status(200).type('application/json').send(data);

    } catch (e) {
        Response.status(400).send(e);
    }
    
});

testRouter.get("*", async (Request: express.Request, Response: express.Response) => {
    Response.status(404).send("This route does not exist.");
});