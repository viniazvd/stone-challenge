<template>
  <div>
    <input type="number" :value="this.totalTable" readonly>
    <input type="number" :value="this.totalPayments" readonly>
  </div>
</template>

<script>

export default {
  name: 'totalTable',

  props: ['totalTable', 'totalPayments']
}
</script>

<style scoped>
div {
  margin-left: 148px;
  padding-bottom: 7px;
}

input {
  border: 2px solid green;
  border-radius: 3px;
  background-color: #fff;
  margin-left: 1px;
  padding: 3px;
  text-align: center;
}

input[type="number"] {
  width:86px;
}
</style>