import {RESUME_TYPES} from './types'
import axios from 'axios'

export const typesResumes = (category, subCategory, cb)=>{
	  return async (dispatch)=>{
            let {data} = await axios.post('http://localhost:8000/api/get-resume-samples', {
               category, subCategory
            });
            dispatch({
              type: RESUME_TYPES,
              payload: data.result
            })
            cb();
	  }
}