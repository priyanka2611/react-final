
const initialState = {
    loginCheck: true
}
const LoginCheckReducer =(state= initialState, action)=>{ 
    switch(action.type){
       case 'ADD_CHECK':
            return {
                loginCheck: !state.loginCheck
            };
                    
    
        default:
            return state;
    }

}

export default LoginCheckReducer;