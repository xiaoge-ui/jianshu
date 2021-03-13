import axios from 'axios';
import { constants } from './index'

export const LoginInfo=(name,pwd)=>{
    return dispatch=>{
        axios.get("/api/login.json?name="+name+"&pwd="+pwd).then(res=>{
            if(res.data.success==="ok"){
                dispatch({type:constants.LOGININFO,data:res.data.data})
            }else{
                alert("用户名或密码不正确");
            }      
        })
    }
}

export const loginOut=()=>{
    return {
        type:constants.LOGIN_OUT,
    }
}