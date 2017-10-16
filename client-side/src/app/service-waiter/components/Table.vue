<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Payments</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(product, id) in this.productsOfTable" :key="product.id"> -->
        <tr v-for="(productId, index) in this.productsOfTable" :key="productId.id">
          <td>{{ productId[0].name }}</td> 
          <td>{{ productId[0].price }}</td> 
          <td>{{ productId[1].toFixed(2) }}</td> 
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>

export default {
  name: 'tableProducts',

  props: ['productsOfTable']
}
</script>

<style scoped>
table {
  border: 2px solid green;
  border-radius: 3px;
  background-color: #fff;
  margin-left: 52px;
  margin-bottom: 5px;
  table-layout: fixed;
  width: 293px;
}

th {
  background-color: green;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  padding: 5px 10px;
  text-align: center;
}
</style>