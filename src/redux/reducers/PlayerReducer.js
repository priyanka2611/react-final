const initialState = {
    player: false
}

const PlayerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_PLAYER_STATUS':
            return state;
        
        case 'TOGGLE_PLATER_STATUS':
            return {
                player: !state.player
            };

        default:
            return state;
    }
}

export default PlayerReducer;
