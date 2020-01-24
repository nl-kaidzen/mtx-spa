<template>
  <div>
    <h1>Simple graphic with 200 dots</h1>
    <div id="chart">
      <LineChart :chart-data="datacollection" :options="options"/>
    </div>
    <button v-on:click="startTimer" class="button">Generate dots every 30 ms</button>
  </div>
</template>

<script>
import LineChart from '../components/LineChart.vue';

export default {
  name: 'charts',
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      dataSet: {
        label: '',
        backgroundColor: '',
        borderColor: '',
        data: '',
      },
      maxItems: 300,
      index: 0,
      min: -50,
      max: 50,
      dataDotsArray: [],
      dataLabelsArray: [],
      chartData: {
        labels: [],
        datasets: [],
      },
    };
  },
  methods: {
    startTimer() {
      const timerId = setInterval(this.generateData, 30, this.index);
      setTimeout(() => clearInterval(timerId), 15000);
    },
    stopTimer() {
    },
    generateData(index) {
      this.createDot(index);
      this.datacollection = {
        labels: this.dataLabelsArray,
        datasets: [
          {
            label: 'Montronix vibration graphic',
            backgroundColor: 'transparent',
            borderColor: '#f87979',
            lineTension: 0,
            borderWidth: 1,
            radius: 1,
            data: this.dataDotsArray,
          },
        ],
      };
    },
    createDot(i) {
      this.dataDotsArray.push({
        x: i,
        y: this.getRandomInt(this.min, this.max),
      });
      if (this.dataDotsArray.length <= this.maxItems) {
        this.dataLabelsArray.push('');
      } else {
        this.dataDotsArray.splice(0, 1);
      }
      this.index += 1;
    },
    getRandomInt(min, max) {
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/helpers/_variables.scss';
#chart {
  display: block;
  width: 90%;
  margin: 0 auto;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 40px;
  background-color: transparent;;
  border: 2px solid $mint;
  border-radius: 4px;
  margin: 20px auto 0;
  padding: 0 20px;
  cursor: pointer;
  color: $mint;
  font-size: 16px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;

  &:hover,
  &:focus {
    background-color: $mint;
    color: $text;
  }
}
</style>
