import { combineReducers} from "redux";
import repositories from '../store/repositories'

export default combineReducers({
    repositories: repositories
});