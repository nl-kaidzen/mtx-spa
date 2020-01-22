<template>
  <div id="app">
    <div id="nav">
      <NavItem/>
    </div>
    <div class="router-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavItem from '@/components/NavItem.vue';

export default {
  name: 'app',
  components: {
    NavItem,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  * {
    box-sizing: border-box;
  }
}

#nav {
  display: flex;
  width: 20%;
  flex-direction: column;
  height: 100vh;
  border-right: 1px solid #f5f5f5;
  background-color: #f5f5f5;
}

.router-container {
  width: 80%;
}
</style>
