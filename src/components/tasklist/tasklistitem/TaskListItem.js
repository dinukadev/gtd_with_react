import React from 'react';
import TaskActions from '../../taskactions/TaskActions';

const tasklistitem = (props) => {
    const taskActionsRequired = [{
        actionFunction: props.taskRemoved,
        requiredAction: 'remove'
    }];
    return (
        <ul>
            <li>{props.taskName}</li>
            <li>{props.taskDate}</li>
            <li><TaskActions taskActions={taskActionsRequired} taskActionValue={props.taskName}/></li>
        </ul>
    );
};

export default tasklistitem;

