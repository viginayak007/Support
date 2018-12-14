export const createGroup = (Group) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('group').add({
            ...test,
            userId: userId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_GROUP_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'CREATE_GROUP_ERROR' }, err);
        });
        
    }
};
export const getGroups = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        return firestore.collection('group').where("status", "==", 0).get().then((querySnapshot) => {
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
            dispatch({ type: 'GET_TICKET_SUCCESS' , tickets });
        })
    }
};

export const createOrginaization = (Group) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('orginaization').add({
            ...test,
            userId: userId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_GROUP_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'CREATE_GROUP_ERROR' }, err);
        });
        
    }
};
export const getOrginaization = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        return firestore.collection('group').where("status", "==", 0).get().then((querySnapshot) => {
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
            dispatch({ type: 'GET_TICKET_SUCCESS' , tickets });
        })
    }
};