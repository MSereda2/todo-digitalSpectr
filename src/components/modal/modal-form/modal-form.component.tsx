// Packages
import React, {FC} from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

// Styles
import style from './modal-form.module.scss';

// Components
import Input from '../../forms-element/input/input.component';
import Select from '../../forms-element/select/select.component';
import Btn from '../../btn/btn.component';

// Helpers
import { requiredField } from '../../../helpers/validator';

// Types Ts
import {taskItemType, taskObjectType} from '../../../redux/reducers/task.typesTS';

type propsType = {
  tasks: Array<taskObjectType>,
}

const ModalForm:FC<InjectedFormProps<taskItemType> & propsType> = ({tasks,handleSubmit}) => (
  <form onSubmit={handleSubmit} className={style.modal__form}>
    <Field tasks={tasks} name="selectLevel" component={Select} />
    <Field validate={[requiredField]} name="taskName" component={Input} type="text" placeholder="Введите названия задания" />
    <Btn text="Добавить задание" />
  </form>
)

export default reduxForm<taskItemType,propsType>({
  form: 'modal-form'
})(ModalForm);