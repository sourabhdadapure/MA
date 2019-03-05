import { combineReducers } from 'redux'
import stocks from './stocks'
import user from './user'

const rootReducer = combineReducers({
	stocks,
	user,
})

export default rootReducer
