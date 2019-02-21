import React from 'react';
import TaskListItem from './tasklistitem/TaskListItem';
import classes from './TaskList.module.css';

const tasklist = (props) => {
    const taskListItems = props.tasks.map((taskItem) => {
        return <TaskListItem key={taskItem.name} taskRemoved={props.taskRemoved} taskName={taskItem.name}
                             taskDate={taskItem.date}/>;
    });
    return (
        <div className={classes.TaskList}>
            <ul>
                <li><strong>Task Name</strong></li>
                <li><strong>Task Date</strong></li>
                <li><strong>Action</strong></li>
            </ul>
            {taskListItems}
        </div>
    );
};

export default tasklist;
