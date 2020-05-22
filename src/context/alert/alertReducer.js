import { SHOW_ALERT, HIDE_ALERT } from "../types"

const handlers = {
  [SHOW_ALERT]: (state, action) => action.payload,
  [HIDE_ALERT]: (state, action) => null,
  DEFAULT: state => state
}

export const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
  // switch (action.type) {
  //   case SHOW_ALERT:
  //     return action.payload
  //   case HIDE_ALERT:
  //     return null
  //   default:
  //     return state
  // }
}