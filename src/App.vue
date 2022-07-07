<template>
  <div id="app">
    <router-view/>
    <Footer v-if="$route.meta.show" />
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { Footer }
}

</script>

<style lang="scss">

</style>
