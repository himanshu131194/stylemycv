import {combineReducers} from 'redux' 
import {typesResumeReducer, resumeCategoriesReducer, selectedResumeReducer, setLoadingReducer} from './data'

export default combineReducers({
	  listResumes: typesResumeReducer,
	  categoriesList: resumeCategoriesReducer,
	  selectedData :  selectedResumeReducer,
	  loadingIcon :  setLoadingReducer
})