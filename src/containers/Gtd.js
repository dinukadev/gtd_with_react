import React, {Component} from 'react';
import Task from '../components/task/Task';
import TaskList from '../components/tasklist/TaskList';

class Gtd extends Component {

    state = {
        tasks: []
    }

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    taskRemovedHandler = (taskName) => {
        console.log('Task removed for : ' + taskName);
    };

    taskAddedHandler = () => {
        const addedTask = this.inputRef.current.value;
        let updatedTasks = Array(...this.state.tasks);
        updatedTasks.push({
            name: addedTask,
            date: new Date().toLocaleDateString("en-US")
        });
        this.setState({
            tasks: updatedTasks
        })
    };

    render() {
        return (
            <div>
                <Task taskAdded={this.taskAddedHandler} passRef={this.inputRef}/>
                <TaskList taskRemoved={this.taskRemovedHandler} tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Gtd;
