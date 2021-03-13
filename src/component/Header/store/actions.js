import {fromJS} from 'immutable';
import axios from 'axios';
import  {constants} from './index.js';


const changeList =(data) =>{
    return {
        type:constants.GET_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 10),
    }
}

export const inputFocus = ()=>{
    return {
        type: constants.INPUT_FOCUS
    }
}

export const inputBlur = ()=>{
    return {
        type: constants.INPUT_BLUR
    }
}
export const mouseEnter=()=>{
    return {
        type: constants.MOUSE_ENTER
    }
}
export const mouseLeave = () =>{
    return {
        type: constants.MOUSE_LEAVE
    }
}

export const changePage = (page) =>{
    return {
        type:constants.CHANGE_PAGE,
        page
    }
}

export const getList=()=>{
    return dispatch=>{
        axios.get("/api/headerList.json").then(res=>{
            let data=res.data;
            dispatch(changeList(data.data))
        }).catch(e=>{
            console.log(e.message)
        })
    }
}