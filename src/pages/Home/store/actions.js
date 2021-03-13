import axios from 'axios';
import {constants} from './index';
import {fromJS} from 'immutable';

export const get_homeinfo = ()=>{
    return dispatch=>{
        axios.get("/api/homeList.json").then(res=>{
            const result = res.data.data;
            dispatch({
                type:constants.HOME_INFO,
                topicList:result.topicList,
                NewsList:result.NewsList,
                NavList:result.NavList,
                AuthorList:result.AuthorList
            })
        })
    }
}

export const get_homeMore=(page)=>{
    return dispatch=>{
        axios.get("/api/homeMoreList.json?page="+page).then(res=>{
            dispatch({type:constants.HOME_MORE,list:fromJS(res.data.data),page:page+1})
        })
    }
}

export const showItem=(show)=>{
    return {
        type:constants.SHOW_ITEM,
        show,
    }
}

export const hideItem=(hide)=>{
    return {
        type:constants.HIDE_ITEM,
        hide,
    }
}

export const TopItem=()=>{
    if(document.documentElement.scrollTop>150){
        return {
            type:constants.TOP_ITEM
        }
    }else{
        return {
            type:constants.TOP_HIDE_ITEM
        }
    }
}
