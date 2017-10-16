import * as types from './mutations-types'

export default {
  [types.PAYMENT] (state, payment) {
    // console.log('mutations', payment)
    state.products = payment
    // state.products = payment.itemSelected
    // state.products = payment.addPayment
  }
}
