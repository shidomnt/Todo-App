import App from '../component/App.js'
import Header from '../component/Header.js'
import { attach } from '../store.js'

window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)

window.root = $('#root')

/**
 * TodoItem = {
 *  value: '',
 *  status: true/false
 * }
 * 
 * Header component
 *    Heading
 *    Input todo
 * 
 * Main component (Hidden default, show when have todos)
 *    CheckAll button
 *    Todos list component
 *        Todo Item 
 *            Status (Completed? / Editting?)
 *            Content
 *            Destroy button 
 *            Edit button = content
 * 
 * Footer component (Hidden default, show when have todos)
 *    Left - Quantity of Todo remaining (0 default)
 *    Middle - Todos list filter
 *    Right - Clear Todos completed (Hidden if no completed items are left)
 */

attach(App, root)
