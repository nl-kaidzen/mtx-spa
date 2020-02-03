<template>
  <div id="app">
    <div id="nav">
      <button class="burger-btn"
        @click="closeBurgerMenu">&#9776;</button>
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
  data() {
    return {
      isBurgerButtonVisible: 'false',
      isShow: false,
    };
  },
  methods: {
    closeBurgerMenu() {
      const elem = document.querySelector('.nav-list');
      elem.classList.toggle('open');
    },
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
  height: 50px;
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

  .open {
    display: flex;
    left: 0;
  }
}

.burger-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
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
  width: 100%;
  padding: 0 5%;

  @media (min-width: 1200px) {
    width: 80%;
    padding: 0;
  }
}
</style>
