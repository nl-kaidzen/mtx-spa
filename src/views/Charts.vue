<template>
  <div>
    <h1>Message</h1>
    <div id="chart">
      <LineChart/>
    </div>
  </div>
</template>

<script>
import LineChart from '../components/LineChart.vue';

export default {
  name: 'charts',
  components: {
    LineChart,
  },
};
</script>

<style lang="scss">
#chart {
  display: block;
  width: 80%;
  margin: 0 auto;
}
</style>
