<template>
  <div class="bg-gray-800 min-h-screen">
    <NavBar />
     <div :style="`background-image:url(${bg_field})`">
     </div>
     <Footer />
  </div>
</template>

<script>

import NavBar from './NavBar'
import bg_field from './assets/bg_field.jpg'
import Footer from './Footer'

export default {
  name: 'RGV-App',
  components: {
    NavBar,
    Footer,
  },
  data(){
    return{
      bg_field,
    }
  },
}
</script>