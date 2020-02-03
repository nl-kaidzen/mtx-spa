<template>
  <ul class="nav-list"
    @click="closeBurgerMenu">
    <li class="nav-item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/user">User Form</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/charts">Charts</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/table">Table</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavItem',
  data() {
    return {
      isOpen: false,
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
  @import '../assets/helpers/_variables';
  .nav-list {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: -75%;
    list-style: none;
    margin: 0;
    padding: 20px 2%;
    position: fixed;
    top: 50px;
    transition: all 0.5s ease-in;
    width: 75%;

    @media (min-width: 1200px) {
      background-color: transparent;
      height: auto;
      left: 0;
      position: relative;
      top: 0;
      width: 100%;
    }
  }

  .nav-item {
    width: 100%;
    height: 50px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration: none;
      color: $text;
      &:hover,
      &:focus {
        background-color: $secondary;
      }
      &:active {
        background-color: $secondary-darker;
      }
    }

    .router-link-active {
      &.router-link-exact-active {
        background-color: $primary-lighter;
        &:hover {
          background-color: $primary-darker;
        }
        &:active {
          background-color: $primary;
        }
        &:focus {
          background-color: $primary-lighter;
        }
      }
    }
  }
</style>
