import {fromJS} from 'immutable';
import {constants} from './index'
const InitialState = fromJS({
    login:false,
})
export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case constants.LOGININFO:
            return state.set("login",action.data);
        case constants.LOGIN_OUT:
            return state.set("login",false);
        default:
            return state
    }
}