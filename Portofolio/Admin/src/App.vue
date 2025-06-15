<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view /> <!-- This displays whatever view is loaded via router -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
