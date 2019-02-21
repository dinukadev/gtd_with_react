import React, {Component} from 'react';
import Task from '../components/task/Task';
import TaskList from '../components/tasklist/TaskList';
class Gtd extends Component {

    state = {
        tasks: [

        ]
    }

    taskRemovedHandler = (taskName) => {
        console.log('Task removed for : '+ taskName);
    };

    taskAddedHandler = () => {
        console.log('Task added');
    };

    render() {
        return (
            <div>
                <Task taskAdded={this.taskAddedHandler}/>
                <TaskList taskRemoved={this.taskRemovedHandler} tasks={this.state.tasks} />
            </div>
        )
    }
}

export default Gtd;
