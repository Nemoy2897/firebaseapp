export const createProject = (project) => {
return (dispatch, getState, {getFirebase,getFirestore} ) => {
    // mke async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add(
            {...project,
            authorFirstName:'great',
            authorLastName:'dane',
            createdAt:new Date()
        }
    ).then(() => {dispatch({type:'CREATE_PROJECT', project:project})})
    .catch((err) => dispatch({type:'CREATE_PROJECT_ERROR', err}) )
    ;
}
};