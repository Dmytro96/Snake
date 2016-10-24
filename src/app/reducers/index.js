import { combineReducers} from 'redux'
import score from './score'
import snake from './snake'

export default combineReducers({
  score,
  snake
})
