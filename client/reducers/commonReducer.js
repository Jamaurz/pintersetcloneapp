export default function reducer(state={
                                    goal: '/'
                                }, action) {

    if (action.type ==  "GOAL") {
        return {
            ...state,
            goal: action.payload,
        }
    } 
    return state
}
