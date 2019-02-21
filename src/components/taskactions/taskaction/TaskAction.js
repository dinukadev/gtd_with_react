import React from 'react';
import PropTypes from 'prop-types';

const taskaction = (props) => (

    <img onClick={() => props.taskActionValue != null ? props.taskClicked(props.taskActionValue) : props.taskClicked()}
         src={props.taskIcon} alt={props.taskDescription}
         style={{'width': '30px', 'height': '20px', 'cursor': 'pointer'}}></img>
);

taskaction.propTypes = {
    taskDescription: PropTypes.string
}
export default taskaction;
