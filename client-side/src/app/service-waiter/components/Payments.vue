<template>
	<div>
    <h1 class="configSubTitle">payments</h1>

		<div v-for="(item, index) in payments" :key="item.id">
      <div class="centralize">  
        <select id="selectbox" v-model="item.itemSelected" class="form-control">
          <option value="">Item to pay</option>
          <option v-for="(product, i) in products" :key="product.id" @value="product[2]">
            {{ i }} - {{ product[0].name }}
          </option>
        </select>

        <input type="number" v-model="item.payment" placeholder="Valor">
  
        <span class="button-success pure-button" v-if="isLast(index)" @click="add">+</span>
        <span class="button-error pure-button" v-if="lastOne(index)" @click="remove(index, item)">-</span>
      </div>
    </div>
  </div>
  
</template>

<script>
// import { mapActions } from 'vuex'

export default {

  props: ['value', 'products', 'tableProducts', 'table', 'tableSelected'],

  data () {
    return {
      payments: [],
      showButton: true
    }
  },

  created () {
    this.payments = this.value.filter(_item => true)
  },

  methods: {
    // ...mapActions(['attemptPayment']),

    add () {
      const selectItem = item => item.itemSelected
      const selectPayment = item => item.payment
      const isNotEmpty = res => res
      const isNotZero = res => res != 0
      const hasItem = this.payments.map(selectItem).every(isNotEmpty)
      const hasPayment = this.payments.map(selectPayment).every(isNotZero)

      if (hasItem && hasPayment) {
        // create a new default input for pay product
        this.payments.push({ itemSelected: '', payment: '0.0' })
        // this.table[this.tableSelected].payments.push({ productId: '', itemSelected: '', payment: '0.0' })

        const getIndexProductSelected = this.payments[[this.payments.length - 2]].itemSelected[0]
        const itemSelected = this.payments[[this.payments.length - 2]].itemSelected

        // add payment in tables.payments[]
        const productId = this.products[getIndexProductSelected][2]
        const lastPaid = parseFloat(this.payments[[this.payments.length - 2]].payment)
        this.table[this.tableSelected].payments.push({ productId: productId, table: this.tableSelected, itemSelected: itemSelected, paid: lastPaid })

        // update payment value inside tables_products
        this.tableProducts[this.tableSelected].products[getIndexProductSelected].paid += lastPaid

        return this.tableProducts[this.tableSelected]
      }
    },

    remove (index, item) {
      return !item ? false : this.payments.splice(index, 1)
    },

    isLast (index) {
      return (index + 1 === this.payments.length) ? this.showButton = true : this.showButton = false
    },

    lastOne (index) {
      return (this.payments.length === 1) ? this.showButton = false : this.showButton = true
    }
  }

  // watch: {
  //   payments (payments) {
  //     this.$emit('input', payments)
  //   }
  // }
}
</script>

<style scoped>
input[type=number] {
  height: 22px;
  padding-left:20px;
  padding-top: 3px;
  width: 65px;
}

.centralize {
  text-align: center;
  padding-top: 10px;
  padding-right: 45px;
}

select#selectbox, select#selectbox-color {
  -webkit-appearance: button;
  -webkit-border-radius: 2px;
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  -webkit-padding-end: 20px;
  -webkit-padding-start: 2px;
  -webkit-user-select: none;
  background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
  background-position: 97% center;
  background-repeat: no-repeat;
  border: 1px solid green;
  color: green;
  font-size: inherit;
  overflow: hidden;
  padding: 5px 10px;
  text-overflow: ellipsis;
  width: 140px;
  margin-left: 30px;
  font-size: 15px;
}

.button-success,
.button-error {
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.button-success {
  background: rgb(28, 184, 65); 
  padding: 6px 8px 8px 8px;
}

.button-error {
  background: rgb(202, 60, 60); 
  padding: 6px 9px 9px 8px;
}
</style>