import logger from './component/Logger.js'
import storage from './util/storage.js'
import { MAX_TODOS } from './component/App.js'

function random(todoList) {
  const ids = todoList.map(todo => todo?.id)
  let randomNum
  do {
    randomNum = Math.floor(Math.random() * MAX_TODOS)
  } while (ids?.includes(randomNum))
  return randomNum
}

function indexof(todoList, id) {
  return todoList.indexOf(todoList.find(todo => todo.id === id))
}

const init = {
  filter: 'all',
  editing: null,
  filters: {
    all: () => true,
    active: todo => !todo.status,
    completed: todo => todo.status,
  },
  todoList: storage.get() || [],
}

const actions = {
  add({ todoList }, value) {
    if (value) {
      todoList.push({
        value: value,
        status: false,
        id: random(todoList),
      })
    }
  },
  delete({ todoList }, [id]) {
    todoList.splice(indexof(todoList, id), 1)
  },
  patch({ todoList }, [id, value]) {
    todoList[indexof(todoList, id)] = {
      ...todoList[indexof(todoList, id)],
      ...value,
    }
  },
  filter(state, [filter]) {
    state.filter = filter
  },
  startEdit(state, [id]) {
    state.editing = id
  },
  endEdit(state, [id, value]) {
    state.todoList[indexof(state.todoList, id)].value = value
    state.editing = null
  },
  cancelEdit(state) {
    state.editing = null
  },
  toggleAll({ todoList }, [status]) {
    todoList.forEach(todo => (todo.status = status))
  },
  clearCompleted(state) {
    state.todoList
      .filter(state.filters.completed)
      .forEach(todo => this.delete(state, [todo.id]))
  },
}

function reducer(state = init, action, args) {
  actions?.[action]?.(state, args)

  storage.set(state.todoList)
  return state
}

export default logger(reducer)
