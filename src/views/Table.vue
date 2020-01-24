<template>
  <div>
    <h1>Simple table view</h1>
    <CustomTable/>
  </div>
</template>

<script>
import CustomTable from '@/components/CustomTable.vue';

export default {
  name: 'table',
  components: {
    CustomTable,
  },
};
</script>
