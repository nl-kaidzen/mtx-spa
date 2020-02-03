<template>
  <div class="home">
    <img
      class="home__logo"
      alt="Vue logo"
      src="https://www.montronix.com//images/Inhalt/MTX_Logo.svg"
      width="500"
      height="150">
    <HelloWorld msg="Welcome to test SPA for MTX"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__logo {
      margin-top: 20px;
      width: 100%;
      height: auto;

      @media (min-width: 1200px) {
        width: 500px;
        height: 150px;
      }
    }
  }
</style>
