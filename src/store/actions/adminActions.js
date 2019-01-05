
export const createUser = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
    
        return firestore.collection('users').doc(resp.user.uid).set({
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
        });
      }).then(() => {
        dispatch({ type: 'CREATE_USER_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'CREATE_USER_ERROR', err});
      });
    }
  }
export const getUsers = () => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        return firestore.collection('users').get().then((querySnapshot) => {
            let users = [];
            querySnapshot.forEach((doc) => {
                let user={};
                user = { ...doc.data(), id: doc.id }
                users.push(user);
            });
            return Promise.all(users);
        }).catch(err => {
            dispatch({ type: 'GET_USERS_ERROR' , err });
        }).then((users) => {
            dispatch({ type: 'GET_USERS_SUCCESS' , users });
        })
    }
};

export const createGroup = (group) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('groups').add({
            ...group,
            createdBy: userId,
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
export const getOrganizations = () => {
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

export const getOptions = (doc) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        console.log(getState.parentID)
        return firestore.collection('options').doc(doc).get().then((documnetSnapshot) => {
            console.log(documnetSnapshot.data());
            let options = {};
            if (documnetSnapshot.exists) {
                options[doc]= documnetSnapshot.data();
                return options;
            } else {
                options[doc]= {};
            }
            
        }).catch(err => {
            dispatch({ type: 'GET_OPTIONS_ERROR' , err });
        }).then((options) => {
            dispatch({ type: 'GET_OPTIONS_SUCCESS' , options });
        })
    }
};

