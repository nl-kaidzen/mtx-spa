<template>
  <div>
    <h1>Simple User-Form view</h1>
    <div id="form">
      <UserForm/>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  name: 'user',
  components: {
    UserForm,
  },
};
</script>
