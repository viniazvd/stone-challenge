<template>
  <div id="app">
		<div class="container">
			<router-view></router-view>
		</div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@media (max-width: 481px) {
  .divButton {
    height: 100%; 
    width: 100%; 
  }

  .next {
    position: relative;
    top: 50%;
    text-align: center;
    width: 100%;
    margin-top: 20px;
    font-size: 1.0em;
    padding: 8px;
    color: white;
    background: green;
    font-weight: bold;
  }

  .configTitle {
    padding-top: 0px;
    color: green;
    font-size: 17px;
    text-align: center;
    line-height: 40px;
    font-weight: normal;
    text-transform: uppercase;
    font-family: 'Orienta', sans-serif;
    letter-spacing: 1px;
    font-weight: bold;
  }

  .configSubTitle {
    color: green;
    font-size: 14px;
    text-align: center;
    font-weight: normal;
    text-transform: uppercase;
    font-family: 'Orienta', sans-serif;
    letter-spacing: 1px;
    font-weight: bold;
  } 
}
</style>
