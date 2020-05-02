// Packages
import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Styles
import style from './modal-form.module.scss';

// Components
import Input from '../../forms-element/input/input.component';
import Select from '../../forms-element/select/select.component';
import Btn from '../../btn/btn.component';

// Helpers
import { requiredField } from '../../../helpers/validator';

const ModalForm = (props) => (
  <form onSubmit={props.handleSubmit} className={style.modal__form}>
    <Field tasks={props.tasks} name="selectLevel" component={Select} />
    <Field validate={[requiredField]} name="taskName" component={Input} type="text" placeholder="Введите названия задания" />
    <Btn text="Добавить задание" />
  </form>
)

export default reduxForm({
  form: 'modal-form'
})(ModalForm);