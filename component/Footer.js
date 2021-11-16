import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

function Footer({ todoList, filter }) {
  const completedLength = todoList.filter((todo) => todo.status).length
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todoList.filter(item => !item.status).length}</strong> item
        left</span
      >
      <ul class="filters">
        <li>
          <a href="#/" class="${filter === 'all' ? 'selected' : ''} filter all"
            >All</a
          >
        </li>
        <li>
          <a
            href="#/active"
            class="${filter === 'active' ? 'selected' : ''} filter active"
            >Active</a
          >
        </li>
        <li>
          <a
            href="#/completed"
            class="${filter === 'completed' ? 'selected' : ''} filter completed"
            >Completed</a
          >
        </li>
      </ul>
      <button class="clear-completed" style="display: ${completedLength ? 'block' : 'none'}">Clear completed</button>
    </footer>
  `
}

export default connector(Footer)
