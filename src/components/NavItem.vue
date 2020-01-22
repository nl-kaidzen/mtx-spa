<template>
  <ul class="nav-list">
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
};
</script>

<style lang="scss">
  @import '../assets/helpers/_variables';
  .nav-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 20px 2%;
    background-color: transparent;
    list-style: none;
    margin: 0;
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
        background-color: $mint;
      }
      &:active {
        background-color: $mint-darker;
      }
    }

    .router-link-active {
      &.router-link-exact-active {
        background-color: $purple-lighter;
        &:hover {
          background-color: $purple-darker;
        }
        &:active {
          background-color: $purple;
        }
        &:focus {
          background-color: $purple-lighter;
        }
      }
    }
  }
</style>
