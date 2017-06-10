export default function reducer(state={
                                    images: [],
                                    winboard: [],
                                    winboardHome: []
                                }, action) {
    if (action.type == 'SET_IMAGES') {
        return {
            ...state,
            images: action.payload
        }
    } else if(action.type == 'STORE_WINBOARD') {
        return {
            ...state,
            winboard: action.payload
        }
    } else if(action.type == 'STORE_WINBOARD_HOME') {
        return {
            ...state,
            winboardHome: action.payload
        }
    }

    return state
}