// Packages
import React, { useState, FC } from 'react';
import { connect } from 'react-redux';

// Components
import AddTaskBtn from '../add-task-btn/add-task-btn.component';
import Modal from '../modal/modal.component';

// Actions
import { addTaskAC } from '../../redux/reducers/task.action';

// Types TS
import {taskObjectType,taskItemType} from '../../redux/reducers/task.typesTS';
import {appStateType} from '../../redux/rootReducer';

type mapDispatchPropsType = {
  addTaskAC: (data: taskItemType) => void
}

type mapStatePropsType = {
  tasks: Array<taskObjectType>,
}

type propsType = mapDispatchPropsType & mapStatePropsType;

const CreateTask:FC<propsType> = ({tasks,addTaskAC}) => {
  const [modal, showModal] = useState(false);

  return (
    <>
      <AddTaskBtn modal={modal} showModal={showModal} />
      <Modal tasks={tasks} addTask={addTaskAC} showModal={showModal} modal={modal} />
    </>
  )
}

const mapStateToProps = (state: appStateType):mapStatePropsType => ({
  tasks: state.tasks.tasks
})

// TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
export default connect(mapStateToProps, { addTaskAC })(CreateTask);