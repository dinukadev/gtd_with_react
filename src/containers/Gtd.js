import React, {Component} from 'react';
import Task from '../components/task/Task';

class Gtd extends Component {

    state = {
        task: {
            id: null,
            name: null,
            date: null
        }
    }

    taskAddedHandler = ()=>{
      console.log('Task added');
    };

    render() {
        return (
            <div>
               <Task taskAdded={this.taskAddedHandler}/>
            </div>
        )
    }
}

export default Gtd;
