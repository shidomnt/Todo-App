export default function logger(reducer) {
  return (...args) => {
    // const [preState, action, arg] = args
    // console.group(action || 'Start')
    // console.log(preState)
    // console.log(action, arg?.[0] )
    // console.log(nextState)
    // console.groupEnd()
    const nextState = reducer(...args)
    return nextState
  }
}
