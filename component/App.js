import html from '../core.js'
import { connect } from '../store.js'
import Header from './Header.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'
import handleEventListeners from './HandleEventListeners.js'

const connector = connect()

function App({todoList}) {
  handleEventListeners()

  return html`
    <section class="todoapp">${Header()} ${!!todoList.length && TodoList()} ${!!todoList.length && Footer()}</section>
  `
}

export default connector(App)

export const MAX_TODOS = 10000
