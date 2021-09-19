<template>
  <div class="tablet-container">
    <div class="tablet-contents">
      <AppNav />


      <router-view/>

    </div>
  </div>



</template>


<script>
import AppNav from './components/apps/AppNav'
 
export default ({
  name: 'App',
  components: {
    AppNav
  }
})
</script>

<style>
  .tablet-container {
    @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-tablet h-tablet;
    background-size: 100% 100%;
    background-image: url('~@/assets/images/tablet.png');
  }

  .tablet-contents {
    @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
    height: 85%;
    width: 90%;
  }
  .page {
      @apply ml-32 bg-gradient-to-t from-gray-800 to-gray-900 min-h-full p-10 text-gray-50 rounded-sm border-2 border-gray-800;
  }
</style>
