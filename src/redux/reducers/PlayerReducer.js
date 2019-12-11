const initialState = {
    player: false
}

const PlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_PLATER_STATUS':
            return {
                player: !state.player
            };
        default:
            return state;
    }
}

export default PlayerReducer;
