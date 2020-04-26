<template>
    <div class="ContactUs">
        <NavBar />
      <div class="relative h-screen w-screen bg-cover bg-center shadow-2x1" 
      :style="`background-image:url(${bg_field})`">
      <div class="h-screen w-screen opacity-80" />
      <div class="absolute h-screen w-screen top-0 flex-col justify-center items-center">
          <h1 class="text-7xl font-bold text-white px-6 hover:bg-white hover:text-white-800 opacity-80">
              RGV League | Contact Us
          </h1>
          <h3 class="text-4xl font-bold text-white px-6 hover:bg-white hover:text-white-800 opacity-80"> For any questions or concerns be free to contact us. 
To call us  956-522-6677
Office Hours:
M-F 10am - 5pm
Saturdays 2pm - 6pm
Sundays Closed
 </h3>
 <footer />
      </div>  
    </div>
</template>

<script>

import NavBar from './NavBar'
import bg_field from '../assets/bg_field.jpg'
import ContactUs from '../views/ContactUs'
import Footer from './Footer'

export default {
    name:'ContactUs',
    components: {
        NavBar,
        Footer,
    },
    views: {
        ContactUs
    },
    data() {
        return {
            bg_field,
        }
    }
}
</script>