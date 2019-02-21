import React from 'react';
import classes from './Task.module.css';
import TaskActions from '../taskactions/TaskActions';
const task = (props) =>{
    const taskActionsRequired = [{
        actionFunction: props.taskAdded,
        requiredAction: 'add'
    }];
    return (
      <div className={classes.Task}>
          <label>Task</label>
          <input type="text" />
          <TaskActions taskActions={taskActionsRequired}/>
      </div>
    );
};

export default task;
