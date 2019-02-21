import React from 'react';
import TaskAction from './taskaction/TaskAction';
import plusIcon from '../../assets/images/plus_icon.png';

const knownActionsMetaData = {
    add: {
        imageSrc: plusIcon,
        imageAlt: 'add'
    },
    remove: {
        imageSrc: '',
        imageAlt: 'remove'
    }
};

const taskaction = (props) => {
    return props.taskActions.map((taskAction) => {
        const actionFunction = taskAction.actionFunction;
        const actionMetaData = Object.keys(knownActionsMetaData).filter((val) =>{
           return val === taskAction.requiredAction;
        }).map((key) =>{
            return knownActionsMetaData[key];
        });
        return <TaskAction key={taskAction.requiredAction} taskClicked={actionFunction} taskIcon={actionMetaData[0].imageSrc}
                           taskDescription={actionMetaData[0].imageAlt}/>
    });


};

export default taskaction;
