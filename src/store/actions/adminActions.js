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
        return firestore.collection('groups').get().then((querySnapshot) => {
            let groups = [];
            querySnapshot.forEach((doc) => {
                let group={};
                group = { ...doc.data(), id: doc.id }
                groups.push(group);
            });
            return Promise.all(groups);
        }).catch(err => {
            dispatch({ type: 'GET_GROUPS_ERROR' , err });
        }).then((groups) => {
            dispatch({ type: 'GET_GROUPS_SUCCESS' , groups });
        })
    }
};

export const createOrganization = (organization) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('organizations').add({
            ...organization,
            userId: userId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ORGANIZATION_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'CREATE_ORGANIZATION_ERROR' }, err);
        });
        
    }
};
export const getOrganizations = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        console.log(getState.parentID)
        return firestore.collection('organizations').get().then((querySnapshot) => {
            let organizations = [];
            querySnapshot.forEach((doc) => {
                let organization={};
                organization = { ...doc.data(), id: doc.id }
                organizations.push(organization);
            });
            return Promise.all(organizations);
        }).catch(err => {
            dispatch({ type: 'GET_ORGANIZATION_ERROR' , err });
        }).then((organizations) => {
            dispatch({ type: 'GET_ORGANIZATION_SUCCESS' , organizations });
        })
    }
};