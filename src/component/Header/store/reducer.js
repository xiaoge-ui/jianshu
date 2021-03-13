import { constants } from './index';
import { fromJS } from 'immutable';
const InitialState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1,
});
export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case constants.INPUT_FOCUS:
            return state.set("focused",true);
        case constants.INPUT_BLUR:
            return state.set("focused",false);
        case constants.GET_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage,
            });
        case constants.MOUSE_ENTER:
            return state.set("mouseIn",true);
        case constants.MOUSE_LEAVE:
            return state.set("mouseIn",false);
        case constants.CHANGE_PAGE:
            return state.set("page",action.page)
        default:
            return state
    }
}