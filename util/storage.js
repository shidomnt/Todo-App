const TODOS_STORAGE_KEY = 'TODOS-KEY'

export default {
  set(state) {
    window.localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(state))
  },
  get() {
    return JSON.parse(window.localStorage.getItem(TODOS_STORAGE_KEY)) 
  }
}