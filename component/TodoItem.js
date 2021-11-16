import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

function TodoItem({ todoList, filter }) {
  switch (filter) {
    case 'completed':
      todoList = todoList.filter(item => item.status)
    case 'active':
      break
    default:
  }
  return html`
    ${todoList?.map(
      todo => `
    <li data-id="${todo.id}" class="${todo.status ? 'completed' : ''}">
      <div class="view">
          <input class="toggle" type="checkbox" ${todo.status ? 'checked' : ''}>
          <label>${todo.value}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="${todo.value}">
      </li>
    `
    )}
  `
}

export default connector(TodoItem)
