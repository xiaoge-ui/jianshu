import {fromJS} from 'immutable'
import {constants} from './index'

const initialState=fromJS({
    topicList:[],
    NewsList:[],
    NavList:[],
    AuthorList:[],
    NewsPage:1,
    ScrollItem:false,
    ScrollTop:false,
})

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.HOME_INFO:
            return state.merge({
                topicList:fromJS(action.topicList),
                NewsList:fromJS(action.NewsList),
                NavList:fromJS(action.NavList),
                AuthorList:fromJS(action.AuthorList)
            });
        case constants.HOME_MORE:
            return state.merge({
                NewsList:state.get("NewsList").concat(action.list),
                NewsPage:action.page
            });
        case constants.SHOW_ITEM:
            return state.set('ScrollItem',action.show);
        case constants.HIDE_ITEM:
            return state.set('ScrollItem',action.hide);
        case constants.TOP_ITEM:
            return state.set("ScrollTop",true);
        case constants.TOP_HIDE_ITEM:
            return state.set("ScrollTop",false);
        default:
            return state
    }
}