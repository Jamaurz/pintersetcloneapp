export default function reducer(state={
                                    show: false
                                }, action) {
    if (action.type == "SHOW_MODAL") {
        return {
            ...state,
            show:true
        }
    } else if (action.type == "HIDE_MODAL") {
        return {
            ...state,
            show: false
        }
    }

    return state
}