import React from 'react';
import classes from './Task.module.css';
import TaskActions from '../taskactions/TaskActions';
import PropTypes from 'prop-types';

const task = (props) =>{
    const taskActionsRequired = [{
        actionFunction: props.taskAdded,
        requiredAction: 'add'
    }];
    return (
      <div className={classes.Task}>
          <label>Task</label>
          <input placeholder="Enter your task at your own risk" type="text" ref={props.passRef}/>
          <TaskActions taskActions={taskActionsRequired}/>
      </div>
    );
};

task.propTypes = {
    passRef: PropTypes.object,
    taskAdded: PropTypes.func

}

export default task;
