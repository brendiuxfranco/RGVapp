<template>
  <nav
    class="nav w-screen z-20 text-black"
    :class="ishome ? '' : 'shadow-2xl bg-gray-800'"
  >
    <div class="left">
      <span class="font-light text-3xl">
        RGV
        <span class="font-semibold">League</span>
      </span>
    </div>
    <div class="center">
      <views-link class="link" to="/Home">Home |</views-link>
    </div>
    <div class="center">
        <RegisterForm class="link" to="/RegisterForm"> Register Form |</RegisterForm>
    <div class="center">
      <views-link class="link" to="/Calendar"> Calendar |</views-link>
    </div>
    <div class="center">
        <views-link class="link" to="/ContactUs">Contact Us </views-link>
    </div>
    <div class="right">
        <views-link class="link" to="/ContactUs">Login </views-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    ishome: {
      type: Boolean,
      default: true,
    },
  },
}
</script>