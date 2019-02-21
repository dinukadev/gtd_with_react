import {ADD_TASK} from "./ActionTypes";
import {REMOVE_TASK} from "./ActionTypes";

export const addTask = (inputRef)=>{
    return {
        type: ADD_TASK,
        inputRef: inputRef
    }
};

export const removeTask = (val)=>{
    return {
        type: REMOVE_TASK,
        val: val
    }
};
