import { actionType  } from '../constants';
// import SET_THEME from '../constants';
// import SET_TOKEN from '../constants';


export const setTheme = (data) =>{
    return{
        type:actionType.SET_THEME,
        data:data

    }
};
export const setToken = (data)=>{
    return{
        type : actionType.SET_TOKEN,
        data:data
    }
};