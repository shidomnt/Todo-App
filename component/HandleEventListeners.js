import random from './Random.js'

export default function handleEventListeners() {
  // Add / Edit Todo
  root.onkeyup = function (e) {
    if (
      e.target.classList.contains('new-todo') ||
      e.target.classList.contains('edit')
    ) {
      switch (e.keyCode) {
        case 13:
          if (e.target.value) {
            const todo = {
              value: e.target.value.trim(),
              status: false,
              id: random(),
            }
            if (e.target.classList.contains('new-todo')) {
              dispatch('ADD', todo)
              $('header .new-todo').focus()
            } else if (e.target.classList.contains('edit')) {
              todo.id = e.target.closest('li[data-id]').dataset.id
              dispatch('PATCH', todo)
            }
          }
          break
      }
    }
  }

  //Todo Completed?
  root.onchange = function (e) {
    if (e.target.classList.contains('toggle-all')) {
      $$('.todo-list .toggle').forEach(function (item) {
        const patchTodo = {
          status: e.target.checked,
          id: item.closest('li[data-id]').dataset.id,
        }
        dispatch('PATCH', patchTodo)
      })
      dispatch('TOGGLE_ALL', e.target.checked)
    } else if (e.target.classList.contains('toggle')) {
      const patchTodo = {
        status: e.target.checked,
        id: e.target.closest('li[data-id]').dataset.id,
      }
      dispatch('PATCH', patchTodo)
    }
  }
  //Delete Todo / Delete Completed
  root.onclick = function (e) {
    if (e.target.classList.contains('destroy')) {
      if (e.target.closest('li[data-id]')) {
        dispatch('DELETE', e.target.closest('li[data-id]').dataset.id)
      }
    } else if (e.target.classList.contains('clear-completed')) {
      const items = $$('li[data-id]')
      items.forEach(function (item) {
        if (item.classList.contains('completed')) {
          dispatch('DELETE', item.dataset.id)
        }
      })
    } else if (e.target.classList.contains('filter')) {
      if (!e.target.classList.contains('selected')) {
        if (e.target.classList.contains('all')) {
          dispatch('FILTER', 'all')
        } else if (e.target.classList.contains('active')) {
          dispatch('FILTER', 'active')
        } else if (e.target.classList.contains('completed')) {
          dispatch('FILTER', 'completed')
        }
      }
    }
  }
  //Open Edit Todo
  root.ondblclick = function (e) {
    if (e.target.closest('li[data-id]') && e.target.closest('label')) {
      if (!e.target.closest('li[data-id]').classList.contains('completed')) {
        const editField = e.target.closest('li[data-id]').querySelector('.edit')
        e.target.closest('li[data-id]').classList.add('editing')
        editField.focus()
        editField.selectionStart = editField.selectionEnd =
          editField.value.length
      }
    }
  }
  //Close Edit Todo
  document.onclick = function (e) {
    if (!e.target.classList.contains('edit')) {
      const items = $$('li[data-id]')
      for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('editing')) {
          items[i].classList.remove('editing')
          break
        }
      }
    }
  }
}
