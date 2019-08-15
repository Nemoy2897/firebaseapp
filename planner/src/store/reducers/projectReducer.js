const initState={
projects:[
    {id:'1', title: 'help me find peace', content:'blah blew bruh'},
    {id:'2', title: 'help me find wisdom', content:'blah blew bruh'},
    {id:'3', title: 'help me find thought', content:'blah blew bruh'}
]
}
const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project')
            console.log(action.project)
        }
        return state
    }
    
export default projectReducer;