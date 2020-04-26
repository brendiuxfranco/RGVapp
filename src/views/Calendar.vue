<template>
    <div class="Calendar">
        <NavBar />
        <div class="absolute h-screen w-screen top-0 flex-col justify-center items-center">
          <h1 class="text-7xl font-bold text-white px-6 hover:bg-white hover:text-white-800 opacity-80">
              RGV League | Calendars 2020
          </h1>
          <p> Here is the calendar for these season 2020.
              To see the calendar click to download the <open>
              <download href="link-to.docx" target="RGV League Calendar.docx">word document.</download></open> 
          </p>
    </div>
    <footer />
    </div>
</template>

<script>

import NavBar from './NavBar'
import RGVLeagueCalendar from '../assets/RGV Legaue Calendar.docx'
import Calendar from '../views/Calendar'
import Footer from './Footer'

export default {
    name:'Calendar',
    components: {
        NavBar,
        Footer,
    },
    data() {
        RGVLeagueCalendar,
    },
}
</script>