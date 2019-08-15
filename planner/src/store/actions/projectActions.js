export const createProject = (project) => {
return (dispatch, getState) => {
    // mke async call to database
    dispatch({type:'CREATE_PROJECT', project:project});
}
};