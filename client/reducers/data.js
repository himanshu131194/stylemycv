import {RESUME_TYPES, RESUME_CATEGORIES} from '../actions/types'

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