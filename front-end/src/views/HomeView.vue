<template>
  <TheNavbar />
  <HeroSection />
  <p>Landing page</p>
</template>

<script>
// @ is an alias to /src
import TheNavbar from '/src/components/TheNavbar';
import HeroSection from "@/components/HeroSection";

export default {
  name: 'HomeView',
  components: {
    TheNavbar,
    HeroSection,
  },
};
</script>
