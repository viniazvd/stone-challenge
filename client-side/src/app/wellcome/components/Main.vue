<template>
	<div>
		<h1 class="configTitle">stone service for restaurants</h1>

    <div class="divButton">
      <button class="next" @click="next">START</button>
    </div>
	</div>
</template>

<script>
export default {
  name: 'wellcome',

  methods: {
    next () {
      this.$router.push('/service-waiter')
    }
  }
}
</script>