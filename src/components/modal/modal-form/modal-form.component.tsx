// Packages
import React, { FC } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

// Styles
import style from './modal-form.module.scss';

// Components
import Input from '../../forms-element/input/input.component';
import Select from '../../forms-element/select/select.component';
import Btn from '../../btn/btn.component';
import Radio from '../../forms-element/radio/radio.component';

// Helpers
import { requiredField } from '../../../helpers/validator';

// Types Ts
import { taskItemType, taskObjectType } from '../../../types/task.typesTS';

type propsType = {
  tasks: Array<taskObjectType>,
}

const ModalForm: FC<InjectedFormProps<taskItemType> & propsType> = ({ tasks, handleSubmit }) => (
  <form onSubmit={handleSubmit} className={style.modal__form}>
    <label>Родителский элемент</label>
    <Field
      tasks={tasks}
      name="selectParent"
      component={Select}
      type="select" />
    <label>Выберить уровень вложености</label>
    <div className={style.radioContainer}>
      <Field
        name="selectLevel"
        component={Radio}
        level="Уровень 1"
        type="radio"
        value="Уровень 1"
      />
      <Field
        name="selectLevel"
        component={Radio}
        level="Уровень 2"
        type="radio"
        value="Уровень 2"
      />
      <Field
        name="selectLevel"
        component={Radio}
        level="Уровень 3"
        type="radio"
        value="Уровень 3"
      />
    </div>

    <label>Задания</label>
    <Field
      validate={[requiredField]}
      name="taskName"
      component={Input}
      type="text"
      placeholder="Введите названия задания" />

    <Btn text="Добавить задание" />
  </form>
)

export default reduxForm<taskItemType, propsType>({
  form: 'modal-form',
  initialValues: {
    selectLevel: 'Уровень 1',
    selectParent: 'Создать новый родителский элемент'
  }
})(ModalForm);