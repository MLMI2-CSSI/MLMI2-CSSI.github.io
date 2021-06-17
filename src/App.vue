<template>
  <div id="app">
    <div id="nav">
      <TopNav />
    </div>
    <router-view />

    <div id="foot">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    TopNav,
    Footer
  }
}

</script>

<style>
</style>
