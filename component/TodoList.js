import html from '../core.js'
import { connect } from '../store.js'
import TodoItem from './TodoItem.js'

const connector = connect()

function TodoList({toggleAll}) {
  return html`
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" ${toggleAll ? 'checked' : ''}>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${TodoItem()}
      </ul>
    </section>
  `
}

export default connector(TodoList)
