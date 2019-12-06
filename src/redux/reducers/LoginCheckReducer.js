
const initialState = {
    loginCheck: true
}
const LoginCheckReducer =(state= initialState, action)=>{ 
    switch(action.type){
       case 'ADD_CHECK':
            return {
                loginCheck: false
            };
        case 'LOGOUT':
            return {
                loginCheck: true
            }          
    
        default:
            return state;
    }

}

export default LoginCheckReducer;