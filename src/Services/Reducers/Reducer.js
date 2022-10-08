import {actionType} from '../constants';

const initialState= {
    token : '',
    theme : 'Light'
}


export const updateState =(state = initialState,{type,data})=>{
    switch(type){
        case actionType.SET_TOKEN:
        return{
            ...state,
            token:data
        }
        case actionType.SET_THEME:
        return{
            ...state,
            theme:data
        }
        default:
            return state
        
    }
}