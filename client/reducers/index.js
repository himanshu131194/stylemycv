import {combineReducers} from 'redux' 
import {typesResumeReducer, resumeCategoriesReducer} from './data'

export default combineReducers({
	  listResumes: typesResumeReducer,
	  categoriesList: resumeCategoriesReducer
})