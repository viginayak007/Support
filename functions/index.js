const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const settings = {timestampsInSnapshots: true};
admin.firestore().settings(settings);

//error handling
const createError = (error => {
  return admin.firestore().collection('errors').add(error);
});

const getCollections = ((collectionName, context, callback) => {
  admin.firestore().collection(`${collectionName}`).get()
    .then((querySnapshot) =>{
      let array =[];
      querySnapshot.forEach((doc) => {
        let object = {}
        object[doc.id] = doc.data();
        array.push(object);
      });
      return Promise.all(callback(array));
    }).catch((err) =>  {
      const error = {
        user : context.auth, 
        content: err,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return (callback(error));
    });
}); 

const getDocument = ((collectionName, documentName, context, callback) => {
  admin.firestore().collection(`${collectionName}`).doc(`${documentName}`).get()
    .then((doc) =>{
      let object = {};
      object[doc.id] = doc.data();
      return Promise.all(callback(object));
    }).catch((err) =>  {
      const error = {
        user : context.auth, 
        content: err,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return (callback(error));
    });
});

exports.userUpdated = functions.firestore.document('users/{userId}').onUpdate((change, context) => {
  if(change.after.data()){
    let permissions = {};
    getCollections("permissions", context , data => {
      if(!data.error){
        permissions = data;
        userGroups = change.after.data().groups;
        userGroups.map(group => {
          getDocument("groups", group.id, context, groupData => {
            if(!groupData.error){
              return console.log(groupData);
            }else{
              const error = {
                user : context.auth, 
                content: "unable to get group id:" + groupID,
                time: admin.firestore.FieldValue.serverTimestamp()
              };
              return createError(error)      
            }
          })
          return (console.log('getCollections'));
        });
      }else{
        const error = {
          user : context.auth, 
          content: "unable to get permissions",
          time: admin.firestore.FieldValue.serverTimestamp()
      };
        return createError(error)    
      }
      return null
    });
  }else{
    const error = {
      user : context.auth, 
      content: "unable to find updated changes of  userId:" + change.id,
      time: admin.firestore.FieldValue.serverTimestamp()
  };
    return createError(error)
  }
})


exports.groupCreated = functions.firestore.document('groups/{groupId}').onCreate((doc, context) => {
  const group = doc.data();
  group.config.selectedUsers.map(user => {
    return admin.firestore().collection('users').doc(user.id).get()
    .then(userDoc => {
        const user = userDoc.data();
        return console.log(user);
    }).catch(err => {
      const error = {
        user : context.auth, 
        content: err,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createError(error)
    });
  })
});

