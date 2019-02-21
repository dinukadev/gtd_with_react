import React from 'react';

const taskaction = (props) => (

    <img onClick={props.taskClicked} src={props.taskIcon} alt={props.taskDescription}
         style={{'width': '30px', 'height': '20px', 'cursor': 'pointer'}}></img>
);

export default taskaction;
