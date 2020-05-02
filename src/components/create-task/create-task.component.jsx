// Packages
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Components
import AddTaskBtn from '../add-task-btn/add-task-btn.component';
import Modal from '../modal/modal.component';

// Actions
import { addTaskAC } from '../../redux/reducers/task.action';


const CreateTask = (props) => {
  const [modal, showModal] = useState(false);

  return (
    <>
      <AddTaskBtn modal={modal} showModal={showModal} />
      <Modal tasks={props.tasks} addTask={props.addTaskAC} showModal={showModal} modal={modal} />
    </>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks
})

export default connect(mapStateToProps, { addTaskAC })(CreateTask);