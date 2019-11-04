<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>