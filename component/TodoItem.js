import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

function TodoItem({ todoList, filter, filters, editing }) {
  todoList = todoList.filter(filters[filter])
  return html`
    ${todoList?.map(
      todo => html`
        <li
          data-id="${todo.id}"
          class="${todo.status ? 'completed' : ''} ${editing === todo.id
            ? 'editing'
            : ''}"
        >
          <div class="view">
            <input
              onchange="dispatch('patch',${todo.id},{
                status: this.checked,
              })"
              class="toggle"
              type="checkbox"
              ${todo.status ? 'checked' : ''}
            />
            <label ondblclick="dispatch('startEdit',${todo.id})"
              >${todo.value}</label
            >
            <button
              onclick="dispatch('delete',${todo.id})"
              class="destroy"
            ></button>
          </div>
          <input
            onkeyup="event.keyCode === 27 && dispatch('cancelEdit') || event.keyCode === 13 && dispatch('endEdit',${todo.id},this.value)"
            class="edit"
            value="${todo.value}"
          />
        </li>
      `
    )}
  `
}

export default connector(TodoItem)
