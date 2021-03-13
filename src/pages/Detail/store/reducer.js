import {fromJS} from 'immutable';
import {constants} from './index'
const InitialState = fromJS({
    title:"",
    imgUrl:"",
    imgBack:"",
    author:"",
    xin:"",
    time:"",
    pice:"",
    picedu:"",
    content:"",

})
export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case constants.DETAIL_INFO:
            return state.merge({
                title:action.data.title,
                imgUrl:action.data.imgUrl,
                imgBack:action.data.imgBack,
                author:action.data.author,
                xin:action.data.xin,
                time:action.data.time,
                pice:action.data.pice,
                picedu:action.data.picedu,
                content:action.data.content,
            })
        default:
            return state
    }
}