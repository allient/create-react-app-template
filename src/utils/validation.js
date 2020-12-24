import { isEmpty } from 'lodash'

export const isValidObject = (value) =>{
    if (!isEmpty(value)&&value!==null&&value!==undefined) {
        return true;
    }else{
        return false;
    }
}

export const isValidArray = (array) =>{
    if (typeof array != "undefined" && array != null && array.length != null) {
        return true;
    }else{
        return false;
    }
}


export const isValidValue = (value) =>{
    if (value!==null && value!==undefined) {
        return true;
    }else{
        return false;
    }
}


export const isValidNotEmptyArray = (array) =>{
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        return true;
        
    }else{
        return false;
    }
}