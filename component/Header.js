import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

function Header() {
  return html`
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
  `
}

export default connector(Header)

