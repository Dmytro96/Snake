import { combineReducers} from 'redux'
import score from './score'
import snake from './snake'
import eat from './eat'

export default combineReducers({
  score,
  snake,
  eat
})
