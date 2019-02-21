import * as actionTypes from '../actions/ActionTypes';

const initialState = {
    tasks: []
};


const taskReducer = (state = initialState, action) => {
    if (action.type === actionTypes.ADD_TASK) {
        return taskAddedHandler(action.inputRef, state);
    }
    if (action.type === actionTypes.REMOVE_TASK) {
        return taskRemovedHandler(action.val, state);
    }

    return state;
};


const taskAddedHandler = (inputRef, state) => {
    let addedTask = inputRef.current.value;
    let updatedTasks = Array(...state.tasks);
    updatedTasks.push({
        name: addedTask,
        date: new Date().toLocaleDateString("en-US")
    });
    inputRef.current.value = '';
    return {
        tasks: updatedTasks
    };
};

const taskRemovedHandler = (taskName, state) => {
    let updatedTasks = Array(...state.tasks);
    updatedTasks = updatedTasks.filter((task,_)=> task.name!==taskName);
    return {
        tasks: updatedTasks
    };
};

export default taskReducer;

