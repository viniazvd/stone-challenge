import * as types from './mutations-types'

export default {
  [types.PAYMENT] (state, payment) {
    state.products = payment
  }
}
