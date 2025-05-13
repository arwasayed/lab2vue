<template>
  <div class="container my-2">
    <div class="row py-2 my-1">
      <headerComponant/>
    </div>

    <div class="row py-5 my-1">  
      <div class="col-4">
        <!-- <h1 class="text-center">links</h1>  -->
        <linkComponent />
      </div>    
      
      <div class="col-8">  
        <!-- <h1 class="text-center">Body</h1>  -->
        <bodyComponent/>
      </div>  
    </div>  

    <div class="row py-5 my-1">
      <!-- <h1>Footer</h1> -->
      <footerComponent/>
    </div>    
  </div>
</template>

<script>
import headerComponant from './components/Header/header.vue'
import linkComponent from './components/Links/link.vue'
import footerComponent from './components/Footer/footer.vue'
import bodyComponent from './components/Body/Body.vue'

export default {
  name: 'main',
  components: {
    headerComponant,
    linkComponent,
    footerComponent,
    bodyComponent
  }
}
</script>

<style>
</style>