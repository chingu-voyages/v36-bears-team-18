<template>
  <TheNavbar />
  <p>Landing page</p>
</template>

<script>
// @ is an alias to /src
import TheNavbar from '/src/components/TheNavbar';
export default {
  name: 'HomeView',
  components: {
    TheNavbar,
  },
};
</script>
