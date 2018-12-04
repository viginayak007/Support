import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getTicket = functions.https.onRequest((request, response) => {
    if(request.method === 'GET'){
        if (request.query.ticket_id){
            db.doc(`test\${request.query.ticket_id}`).get()
            .then(snapshot => {
                const data = snapshot.data();
                response.send(data);
            })
            .catch(error => {
                console.log(error);
                response.status(500).send(error)
            })
        }else{
            response.sendStatus(400).send({ 'Error': 'Method accespts ticket_id as paramter' })
        }
        
    }else{
        response.sendStatus(400).send({'Error': 'Only GET Request is accepted'})
    }
  
});
