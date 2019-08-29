import {RESUME_TYPES, RESUME_CATEGORIES, SELECTED_RESUME, SET_LOADING} from '../actions/types'

export const typesResumeReducer = (state=[], action)=>{
		switch(action.type){
	   	  case RESUME_TYPES:
            return action.payload
	   	  default: 
	   	    return state;
	    }
}

export const resumeCategoriesReducer = (state=[], action)=>{
		switch(action.type){
	   	  case RESUME_CATEGORIES:
            return action.payload
	   	  default: 
	   	    return state;
	    }
} 


export const selectedResumeReducer = (state='', action)=>{
		switch(action.type){
	   	  case SELECTED_RESUME:
            return action.payload
	   	  default: 
	   	    return state;
	    }
} 

export const setLoadingReducer = (state=1, action)=>{
		switch(action.type){
	   	  case SET_LOADING:
            return action.payload
	   	  default: 
	   	    return state;
	    }
} 