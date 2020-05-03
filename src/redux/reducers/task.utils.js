
const addTask = (state, action) => {
  if (!action.selectLevel || action.selectLevel === 'Создать новый родителский элемент') {
    let task = {
      id: Math.floor(Math.random() * Date.now()),
      isAllowedDelete: false,
      name: action.taskName,
      taskNested: [],
    }
    return [...state.tasks, task]
  } else {
    return state.tasks.map(task => {
      if (task.name === action.selectLevel) {
        let newObj = {
          id: Math.floor(Math.random() * Date.now()),
          name: action.taskName,
          isAllowedDelete: false,
        };
        const warning = () => {
          alert(' Упсс.... В тз указано Ограничить допустимую вложенность элементов 3 уровнями а у нас уже 3, sorry(')
          return [...task.taskNested]
        };
        return {
          ...task,
          taskNested: [...task.taskNested].length >= 3 ? warning() : [...task.taskNested, newObj],
        }
      }
      return task
    })
  }
}

const allowDelete = (state, action) => {
  if (action.firstId) {

    return state.tasks.map((task) => {
      if (task.id === action.firstId) {
        return {
          ...task,
          isAllowedDelete: !task.isAllowedDelete,
          taskNested: task.taskNested.map(el => {
            return {
              ...el,
              isAllowedDelete: !el.isAllowedDelete
            }
          }
          )

        }
      }
      return task;
    })
  } else {
    return state.tasks.map(task => {
      if (action.secondId) {
        return {
          ...task,
          isAllowedDelete: task.taskNested.length === 3 && task.taskNested.every((task,i) => task.isAllowedDelete),
          taskNested: task.taskNested.map(el => {
            if (el.id === action.secondId) {
              return {
                ...el,
                isAllowedDelete: !el.isAllowedDelete
              }
            }
            return el;
          })
        }
      } else {
        return task;
      }
    })
  }
}

const removeTask = (state, action) => {
  if (action.firstId) {
    return state.tasks.filter(task => {
      return task.id !== action.firstId
    })

  } else {
    return state.tasks.map(task => {
      if (action.secondId) {
        return {
          ...task,
          taskNested: task.taskNested.filter(task => {
            return task.id !== action.secondId
          })
        }
      }
      return task;
    })
  }
}

export {
  addTask,
  allowDelete,
  removeTask
}