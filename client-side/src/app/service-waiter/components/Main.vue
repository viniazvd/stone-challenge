<template>
	<div>
		<h1 class="configTitle">stone service for restaurants</h1>

    <select id="selectbox" v-model="selected">
      <option value="">Select table</option>
        <option v-for="(table, id) in getTables" :key="table.id" :value="id">
          {{ table.text }}
        </option>
    </select>
{{ this.payments }}
    <TableProducts :productsOfTable="this.selectedTable" v-if="this.selected" />

    <ValorTotal :totalTable="this.totalProduct" :totalPayments="this.totalPayments" v-if="this.selected" />

    <hr v-if="this.selected">

    <payments v-model="payments" :products="this.selectedTable" v-if="this.selected"></payments>

    <div class="divButton">
      <button class="next" @click="next" v-if="this.selected">Close account</button>
    </div>
	</div>
</template>

<script>
import TableProducts from './Table'
import ValorTotal from './ValorTotal'
import Payments from './Payments'
import { mapGetters } from 'vuex'

export default {
  name: 'serviceWaiter',

  components: { TableProducts, ValorTotal, Payments },

  data () {
    return {
      selected: '',
      payments: [{ itemSelected: '', payment: '0.0' }]
    }
  },

  computed: {
    ...mapGetters(['getTables', 'getTableProducts', 'getProducts']),

    selectedTable () {
      return this.getTableProducts[this.selected].products.map(el => this.getProducts[el])
    },

    totalProduct () {
      if (!this.selected) {
        return 0
      }

      return this.getTableProducts[this.selected].products.map(el => this.getProducts[el])
        .map(x => x.price.replace(',', '.'))
        .map(parseFloat)
        .reduce((acc, x) => acc + x, 0)
        .toFixed(2)
    },

    totalPayments () {
      if (!this.selected) {
        return 0
      }

      return !this.getTables[this.selected].payments
    }
  },

  methods: {
    next () {
      this.$router.push('/list-products')
    }
  }
}
</script>

<style scoped>
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
   white-space: nowrap;
   width: 293px;
   margin-left: 50px;
   margin-bottom: 30px;
   font-size: 15px;
}

hr {
	height: 10px;
	border: 0;
	box-shadow: 0 10px 10px -10px #8c8b8b inset;
}
</style>
