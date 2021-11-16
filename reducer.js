import logger from './component/Logger.js'
import storage from './util/storage.js'

const init = storage.get() || {
  toggleAll: false,
  filter: 'all',
  todoList: [],
}

function reducer(state = init, action, args) {
  function checkToggleAll(state) {
    state.toggleAll = true
    for (let i = 0; i < state.todoList.length; i++) {
      if (!state.todoList[i].status) {
        state.toggleAll = false
        break
      }
    }
    return state
  }
  switch (action?.toUpperCase()) {
    case 'ADD':
      state = {
        ...state,
        todoList: [...state.todoList, args[0]],
      }
      break
    case 'DELETE':
      for (let i = 0; i < state.todoList.length; i++) {
        if (state.todoList[i].id === Number(args[0])) {
          state.todoList.splice(i, 1)
          break
        }
      }
      break
    case 'PATCH':
      const { id, ...rest } = args[0]
      for (let i = 0; i < state.todoList.length; i++) {
        if (state.todoList[i].id === Number(id)) {
          state.todoList[i] = {
            ...state.todoList[i],
            ...rest,
          }
          break
        }
      }
      break
    case 'TOGGLE_ALL':
      state.toggleAll = args[0]
      break
    case 'FILTER':
      state.filter = args[0]
      break
  }
  state = checkToggleAll(state)
  storage.set(state)
  return state
}

export default logger(reducer)
