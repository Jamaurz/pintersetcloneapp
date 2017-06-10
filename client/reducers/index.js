import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import common from "./commonReducer"
import twitter from "./twitterReducer"
import mymodal from './mymodalReducer'
import image from './imageReducer'

export default combineReducers({
    routing: routerReducer,
    common,
    twitter,
    mymodal,
    image
})
