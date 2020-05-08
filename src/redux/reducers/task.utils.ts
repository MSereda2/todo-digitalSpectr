import { InitialStateType } from '../../types/task.typesTS';
const addTask = (state: InitialStateType, action: any) => {

  if (action.selectParent === 'Создать новый родителский элемент'
    && action.selectLevel === 'Уровень 1') {
    const newTask = {
      id: Math.floor(Math.random() * Date.now()),
      isAllowedDelete: false,
      name: action.taskName,
      secondLevelNested: [],
      thirdLevelNested: []
    }
    return [...state.tasks, newTask]
  } else if (action.selectParent !== 'Создать новый родителский элемент'
    && action.selectLevel === 'Уровень 2') {
    return state.tasks.map((task: any) => {
      if (task.name === action.selectParent) {
        let newTask = {
          id: Math.floor(Math.random() * Date.now()),
          name: action.taskName,
          isAllowedDelete: false,
        };

        return {
          ...task,
          secondLevelNested: [...task.secondLevelNested, newTask]
        }
      }
      return task
    })
  } else if (action.selectParent !== 'Создать новый родителский элемент'
    && action.selectLevel === 'Уровень 3') {
    return state.tasks.map((task: any) => {
      if (task.name === action.selectParent) {
        let newTask = {
          id: Math.floor(Math.random() * Date.now()),
          name: action.taskName,
          isAllowedDelete: false,
        }
        return {
          ...task,
          thirdLevelNested: [...task.thirdLevelNested, newTask]
        }
      }
      return task;
    })
  } else {
    return [...state.tasks]
  }
}

const allowDelete = (state: InitialStateType, action: any) => {
  if (action.firstId) {
    return state.tasks.map((task: any) => {
      if (task.id === action.firstId) {
        return {
          ...task,
          isAllowedDelete: !task.isAllowedDelete,
          secondLevelNested: task.secondLevelNested.map((el: any) => {
            return {
              ...el,
              isAllowedDelete: !task.isAllowedDelete
            }
          }),
          thirdLevelNested: task.thirdLevelNested.map((el: any) => {
            return {
              ...el,
              isAllowedDelete: !task.isAllowedDelete
            }
          })

        }
      } else {
        return task;
      }
    })
  } else if (action.secondId) {
    return state.tasks.map((task: any) => {
      const secondLevelNested = task.secondLevelNested.map((el: any) => {
        if (el.id === action.secondId) {
          return {
            ...el,
            isAllowedDelete: !el.isAllowedDelete
          }
        } else { return el; }
      });
      return {
        ...task,
        secondLevelNested: secondLevelNested
      }
    })
  } else if (action.thirdId) {
    return state.tasks.map((task: any) => {
      const thirdLevelNested = task.thirdLevelNested.map((el: any) => {
        if (el.id === action.thirdId) {
          return {
            ...el,
            isAllowedDelete: !el.isAllowedDelete
          }
        }
        return el;
      });
      return {
        ...task,
        thirdLevelNested: thirdLevelNested
      }
    })
  } else {
    return [...state.tasks]
  }
}

const removeTask = (state: InitialStateType, action: any) => {
  if (action.firstId) {
    return state.tasks.filter((task: any) => {
      return task.id !== action.firstId
    })

  } else if (action.secondId) {
    return state.tasks.map((task: any) => {
      return {
        ...task,
        secondLevelNested: task.secondLevelNested.filter((task: any) => {
          return task.id !== action.secondId
        })
      }
    })
  } else if (action.thirdId) {
    return state.tasks.map((task: any) => {
      return {
        ...task,
        thirdLevelNested: task.thirdLevelNested.filter((task: any) => {
          return task.id !== action.thirdId
        })
      }
    })
  } else {
    return [...state.tasks]
  }
}

export {
  addTask,
  allowDelete,
  removeTask
}
