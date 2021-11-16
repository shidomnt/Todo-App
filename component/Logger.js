export default function logger(reducer) {
  return (...args) => {
    const [preState, action, arg] = args
    console.group(action || 'Start')
    console.log(preState)
    console.log(action, arg?.[0] )
    const nextState = reducer(...args)
    console.log(nextState)
    console.groupEnd()
    return nextState
  }
}
