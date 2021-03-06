import React from 'react';
import TaskAction from './taskaction/TaskAction';
import plusIcon from '../../assets/images/plus_icon.png';
import minusIcon from '../../assets/images/minus_icon.png';

const knownActionsMetaData = {
    add: {
        imageSrc: plusIcon,
        imageAlt: 'add'
    },
    remove: {
        imageSrc: minusIcon,
        imageAlt: 'remove'
    }
};

const taskaction = (props) => {
    return props.taskActions.map((taskAction) => {
        const actionFunction = taskAction.actionFunction;
        const actionMetaData = knownActionsMetaData[taskAction.requiredAction];
        return <TaskAction key={taskAction.requiredAction} taskClicked={actionFunction}
                           taskIcon={actionMetaData.imageSrc}
                           taskDescription={actionMetaData.imageAlt} taskActionValue={props.taskActionValue}/>
    });


};

export default taskaction;
