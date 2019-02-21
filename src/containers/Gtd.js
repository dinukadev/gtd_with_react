import React, {Component} from 'react';
import Task from '../components/task/Task';
import TaskList from '../components/tasklist/TaskList';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/TaskActions';
import batmanlogo from '../assets/images/batman.png'
class Gtd extends Component {

    // state = {
    //     tasks: []
    // }

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    // The commented part shows how state would be maintained if Redux was not used

    // taskRemovedHandler = (taskName) => {
    //     let updatedTasks = Array(...this.state.tasks);
    //     updatedTasks = updatedTasks.reduce((arr,element,index)=>{
    //         if(element.name===taskName){
    //             arr.splice(index,1);
    //         }else{
    //             arr.push(element);
    //         }
    //         return arr;
    //     },[]);
    //     this.setState({
    //         tasks: updatedTasks
    //     })
    // };
    //
    // taskAddedHandler = () => {
    //     const addedTask = this.inputRef.current.value;
    //     let updatedTasks = Array(...this.state.tasks);
    //     updatedTasks.push({
    //         name: addedTask,
    //         date: new Date().toLocaleDateString("en-US")
    //     });
    //     this.setState({
    //         tasks: updatedTasks
    //     })
    //     this.inputRef.current.value='';
    // };

    render() {
        return (
            <div>
                <Task taskAdded={()=>this.props.taskAddedHandler(this.inputRef)} passRef={this.inputRef}/>
                <TaskList taskRemoved={this.props.taskRemovedHandler} tasks={this.props.tasks}/>
                <div style={{'position': 'absolute','right':'10px','top': '10px'}}><img src={batmanlogo} alt="logo"></img></div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        tasks: state.tasks
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        taskAddedHandler: (inputRef)=> dispatch(actionCreators.addTask(inputRef)),
        taskRemovedHandler: (taskName)=> dispatch(actionCreators.removeTask(taskName))
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Gtd);
