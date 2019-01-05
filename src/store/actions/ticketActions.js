export const createTicket = (Ticket) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('test').add({
            ...test,
            userId: userId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TICKET_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'CREATE_TICEKT_ERROR' }, err);
        });
        
    }
};

export const getTickets = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        return firestore.collection('test').where("status", "==", 0).get().then((querySnapshot) => {
            let tickets = [];
            querySnapshot.forEach((doc) => {
                let ticket={};
                ticket = { ...doc.data(), id: doc.id }
                tickets.push(ticket);
            });
            return Promise.all(tickets);
        }).catch(err => {
            dispatch({ type: 'GET_TICKET_ERROR' , err });
        }).then((tickets) => {
            tickets = tickets.length ? tickets : [];
            dispatch({ type: 'GET_TICKET_SUCCESS' , tickets });
        })
    }
};

