export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('tickets').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TICKET_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'CREATE_TICKET_ERROR' }, err);
        });
    }
};