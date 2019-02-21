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
    updatedTasks = updatedTasks.reduce((arr, element, index) => {
        if (element.name === taskName) {
            arr.splice(index, 1);
        } else {
            arr.push(element);
        }
        return arr;
    }, []);
    return {
        tasks: updatedTasks
    };
};

export default taskReducer;

