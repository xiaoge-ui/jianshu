import axios from 'axios';
import { constants } from './index'

export const detail_info=(id)=>{
    return dispatch=>{
        axios.get('/api/detailList.json?id='+id).then(res=>{
            dispatch({type:constants.DETAIL_INFO,data:res.data.data})
        })
    }
}