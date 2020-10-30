import axios  from 'axios';
import {types} from '../types';

export const fetchPost = () => async (dispatch) => {
    
    try{
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        dispatch({
            type: types.GET_POSTS,
            payload: result.data
        });
    }catch(error){
        // console.log(error);
    }
}