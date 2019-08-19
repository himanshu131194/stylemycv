import {combineReducers} from 'redux' 
import {typesResumeReducer} from './data'

export default combineReducers({
	  listResumes: typesResumeReducer
})