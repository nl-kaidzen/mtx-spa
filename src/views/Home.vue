<template>
  <div class="home">
    <img alt="Vue logo" src="https://www.montronix.com//images/Inhalt/MTX_Logo.svg" width="500" height="150">
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
