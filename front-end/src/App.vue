<template>
  <router-view />
</template>

<style lang="scss">
// General style //
html, body {
  height : 100%;
  }

li {
  list-style : none;
  }
// Helper class //
.wrapper {
  max-width     : 960px;
  margin        : 0 auto;
  padding-left  : 10px;
  padding-right : 10px;
  }

.d-block {
  display: block;
  }

.d-inline-block {
  display: inline-block;
  }

#app {
  min-height : 100vh;
  }
</style>
