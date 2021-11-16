import { connect } from "../store.js";
import { MAX_TODOS } from "./App.js";

const connector = connect()

function random({todoList}) {
  const ids = todoList.map((todo) => todo?.id)
  let randomNum
  do {
    randomNum = Math.floor(Math.random() * MAX_TODOS)
  } while(ids?.includes(randomNum))
  return randomNum
}

export default connector(random)