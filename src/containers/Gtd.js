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
        let updatedTasks = Array(...this.state.tasks);
        updatedTasks = updatedTasks.reduce((arr,element,index)=>{
            if(element.name===taskName){
                arr.splice(index,1);
            }else{
                arr.push(element);
            }
            return arr;
        },[]);
        this.setState({
            tasks: updatedTasks
        })
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
        this.inputRef.current.value='';
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
