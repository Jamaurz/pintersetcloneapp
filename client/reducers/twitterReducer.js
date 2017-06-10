export default function reducer(state={
                                    user: false
                                }, action) {
    if (action.type == "SING_IN_TWITTER") {
        return {
            ...state,
            user: action.payload
        }
    }

    return state
}
