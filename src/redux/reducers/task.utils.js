import { InitialStateType } from './task.typesTS';
const addTask = (state, action) => {

  if (action.selectParent === 'Создать новый родителский элемент'
    && action.selectLevel === 'Уровень 1') {
    let task = {
      id: Math.floor(Math.random() * Date.now()),
      isAllowedDelete: false,
      name: action.taskName,
      secondLevelNested: [],
      thirdLevelNested: [],
    }
    return [...state.tasks, task]
  } else if (action.selectParent !== 'Создать новый родителский элемент' && action.selectLevel === 'Уровень 2') {
    return state.tasks.map(task => {
      if (task.name === action.selectParent) {
        let newObj = {
          id: Math.floor(Math.random() * Date.now()),
          name: action.taskName,
          isAllowedDelete: false,
        };

        return {
          ...task,
          secondLevelNested: [...task.secondLevelNested, newObj]
        }
      }
      return task
    })
  } else if(action.selectParent !== 'Создать новый родителский элемент' && action.selectLevel === 'Уровень 3') {
    return state.tasks.map(task => {
      if(task.name === action.selectParent) {
        let newObj = {
          id: Math.floor(Math.random() * Date.now()),
          name: action.taskName,
          isAllowedDelete: false,
        }
        return {
          ...task,
          thirdLevelNested: [...task.thirdLevelNested, newObj]
        }
      }
    })
  }
}

const allowDelete = (state, action) => {
  debugger
  if (action.firstId) {

    return state.tasks.map((task) => {
      if (task.id === action.firstId) {
        return {
          ...task,
          isAllowedDelete: !task.isAllowedDelete,
          secondLevelNested: task.secondLevelNested.map(el => {
            return {
              ...el,
              isAllowedDelete: !task.isAllowedDelete
            }
          }
          )

        }
      }
      return task;
    })
  } else if(action.secondId) {
    return state.tasks.map(task => {
        const secondLevelNested = task.secondLevelNested.map(el => {
          if (el.id === action.secondId) {
            return {
              ...el,
              isAllowedDelete: !el.isAllowedDelete
            }
          }
          return el;
        });
        return {
          ...task,
          isAllowedDelete: secondLevelNested.filter((task, i) => task.isAllowedDelete).length == task.secondLevelNested.length && secondLevelNested.length !== 0,
          secondLevelNested: secondLevelNested
        }
    })
  } else if(action.thirdId) {
    debugger
    return state.tasks.map(task => {
      const thirdLevelNested = task.thirdLevelNested.map(el => {
        if(el.id === action.thirdId) {
          return {
            ...el,
            isAllowedDelete: !el.isAllowedDelete
          }
        }
      });
      return {
        ...task,
        isAllowedDelete: thirdLevelNested.filter((task) => task.isAllowedDelete).length == task.thirdLevelNested.length && thirdLevelNested.length !== 0,
        thirdLevelNested: thirdLevelNested
      }
    })
  }
}

const removeTask = (state, action) => {
  if (action.firstId) {
    return state.tasks.filter(task => {
      return task.id !== action.firstId
    })

  } else if(action.secondId) {
    return state.tasks.map(task => {
        return {
          ...task,
          secondLevelNested: task.secondLevelNested.filter(task => {
            return task.id !== action.secondId
          })
        }
    })
  } else if(action.thirdId) {
    return state.tasks.map(task => {
      return {
        ...task,
        secondLevelNested: task.secondLevelNested.filter(task => {
          return task.id !== action.secondId
        }),
        thirdLevelNested: task.thirdLevelNested.filter(task => {
          return task.id !== action.thirdId
        })
      }
  })
  }
}

export {
  addTask,
  allowDelete,
  removeTask
}
