import {RESUME_TYPES, RESUME_CATEGORIES, SELECTED_RESUME, SET_LOADING} from './types'
import axios from 'axios'
import CONFIG from '../../config'

export const typesResumes = (category, subCategory, cb)=>{
	  return async (dispatch)=>{
            let {data} = await axios.post(`${CONFIG.API_URL}/api/get-resume-samples`, {
               category, subCategory
            });
            dispatch({
              type: RESUME_TYPES,
              payload: data.result
            })
            cb();
	  }
}


export const listCategories = (cb)=>{
	  return async (dispatch)=>{
            let {data} = await axios.get(`${CONFIG.API_URL}/api/get-resume-categories`);
            dispatch({
              type: RESUME_CATEGORIES,
              payload: data.result
            })
            cb();
	  }
}

export const choosedResume = (selectedResume, resumesList, cb)=>{
	  return async (dispatch)=>{
            let result = {};
            for(let x of resumesList){
                if(x._id==selectedResume){
                   result = x;
                }	
            }
            console.log(result)
            await dispatch({
              type: SELECTED_RESUME,
              payload: result
            })
            cb();
	  }
}

export const setLoading = (flag, cb)=>{
	  return async (dispatch)=>{
            await dispatch({
              type: SET_LOADING,
              payload: flag
            });
            cb();
	  }
}