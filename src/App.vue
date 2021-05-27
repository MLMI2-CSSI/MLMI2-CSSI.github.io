<template>
  <div id="app">
    <div id="nav">
      <TopNav/>
    </div>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'

export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>

<style>


</style>
