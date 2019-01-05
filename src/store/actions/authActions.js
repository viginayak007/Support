export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });

    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}


export const getPermissions = () => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        return firestore.collection('groups').where("config.selectedUsers", "array-contains", {id :userId}).get().then((querySnapshot) => {
            let groups =[];
            querySnapshot.docs.forEach(doc => {
                let group = {...doc.data().config, id: doc.id}
                groups.push(group)
            })    
            return Promise.all(groups);
        }).catch(err => {
            console.log(err);
            dispatch({ type: 'GET_PERMISSIONS_ERROR' , err });
        }).then((groups) => {
            const permissions = { ticket:{create: {canCreate:false}, priorities: {urgency:[],impact:[]}}}
            groups.forEach(group => {
                if(group.ticket){
                    if(group.ticket.create){
                        if(group.ticket.create.canCreate){
                            permissions.ticket.create.canCreate = true
                        }
                    }
                }
            })
            dispatch({ type: 'GET_PERMISSIONS_SUCCESS' , permissions });
            
        })
    }
};