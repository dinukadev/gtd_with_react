import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskActions from './TaskActions';
import TaskAction from './taskaction/TaskAction';

configure({adapter: new Adapter()});

describe('<TaskActions/>', ()=>{
    it('should render one task action',()=>{
        const  taskActionsRequired = [{
            actionFunction: ()=>{},
            requiredAction: 'add'
        }];
        let wrapper = shallow(<TaskActions taskActions={taskActionsRequired}/>)
       expect(wrapper.find(TaskAction)).toHaveLength(1);
    });

});
