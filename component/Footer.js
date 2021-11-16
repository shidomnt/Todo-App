import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

function Footer({ todoList, filter, filters }) {
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todoList.filter(filters.active).length}</strong> item
        left</span
      >
      <ul class="filters">
        ${Object.keys(filters).map(
          type => html`
            <li>
              <a
                onclick="dispatch('filter', '${type}')"
                href="#"
                class="${filter === type && 'selected'} filter ${type}"
              >
                ${type[0].toUpperCase() + type.slice(1)}
              </a>
            </li>
          `
        )}
      </ul>
      <button
        onclick="dispatch('clearCompleted')"
        class="clear-completed"
        style="display: ${todoList.filter(filters.completed).length ? 'block' : 'none'}"
      >
        Clear completed
      </button>
    </footer>
  `
}

export default connector(Footer)
