<template>
  <div id="app">
    <div id="nav">
      <button class="burger-btn" :class="{show: isBurgerButtonVisible}">&#9776;</button>
      <NavItem :class="{show: showed}"/>
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
  data() {
    return {
      isBurgerButtonVisible: 'false',
    };
  },
};
</script>

<style lang="scss">
@import '../src/assets/helpers/_variables.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 1200px) {
    flex-direction: row;
  }

  * {
    box-sizing: border-box;
  }
}

#nav {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 25vw;
  background-color: $primary;

  .burger-btn {
    display: flex
    };

  @media (min-width: 1200px) {
    display: flex;
    width: 20%;
    flex-direction: column;
    height: 100vh;
    border-right: 1px solid #f5f5f5;
    background-color: #f5f5f5;

    .burger-btn {
      display: none;
    }
  }
}

.burger-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 25vw;
  line-height: 1;
  font-size: 28px;
  color: $text-white;
  background-color: $primary;
  border: none;
  cursor: pointer;

  @media (min-width: 1200px) {
    display: none;
  }
  &.show {
    display: flex;
    @media (min-width: 1200px) {
      display: none;
    }
  }
}

.router-container {
  width: 80%;
}
</style>
