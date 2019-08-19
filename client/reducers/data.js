import {RESUME_TYPES} from '../actions/types'

export const typesResumeReducer = (state=[], action)=>{
		switch(action.type){
	   	  case RESUME_TYPES:
            return action.payload
	   	  default: 
	   	    return state;
	    }
} 