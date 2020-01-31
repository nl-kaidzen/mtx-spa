<template>
  <div>
    <h1>Simple graphic with 200 dots</h1>
    <div id="chart">
      <LineChart :chart-data="datacollection" :options="options"/>
    </div>
    <div class="settings">
      <h1 class="settings__header">Settings</h1>
      <div class="settings__taggle-wrap">
        <label for="toggler" class="settings__toggle-label">
          Use custom settings for chart:
          <input class="settings__toggle-cb" type="checkbox" name="" id="toggler"
                 v-model="custom">
          <div class="toggle-body" :class="{'active': custom}">
            <span class="toggle" :class="{'active': custom}"></span>
          </div>
        </label>
      </div>
      <label class="settings__label" for="">Delay between generating dots
        <input class="settings__input" type="text" name="" id="" v-model="delay">
      </label>
      <label class="settings__label" for="">Max count of dots at chart
        <input class="settings__input" type="text" name="" id="" v-model="maxItems">
      </label>
      <span>{{this.delay}}</span>
      <span>{{this.maxItems}}</span>
    </div>
    <button v-on:click="startTimer" class="button">Generate dots every 30 ms</button>
    <p class="text-big">
      When you click on the button, data will
       be generated and displayed on the graph. The delay is approximately
      30ms, which will correspond to ~ 30 frames per second. Data will
       be generated within 15 seconds.
      I limited the size of the graph to 200 points along the X axis,
       but this can be customized.
    </p>
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
      maxItems: 300,
      index: 0,
      min: -50,
      max: 50,
      dataDotsArray: [],
      dataLabelsArray: [],
      delay: 30,
      custom: false,
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

.text-big {
  font-size: 24px;
  width: 70%;
  text-align: left;
  margin: 20px auto;
}

.settings {
  &__input {
    display: flex;
        font-size: 20px;
        align-items: center;
        padding: 15px 20px;
        border: 2px solid $whitesmoke;
        width: 30%;
        border-radius: 4px;
  }

  &__label {
    font-size: 20px;
    color: $text;
    display: flex;
    justify-content: space-between;
    margin: 20px 15% 0;
    align-items: center;
  }
}

.toggle-body {
  display: flex;
  background-color: whitesmoke;
  border: 2px solid #c5c5c5;
  width: 50px;
  height: 25px;
  border-radius: 12.5px;
  position: relative;
  transition: all 0.3s ease-in;

  &.active {
    border-color: $purple;
    background-color: $purple-lighter;
  }
}

.toggle {
  position: absolute;
  display: block;
  width: 19px;
  height: 19px;
  background-color: #c5c5c5;
  border-radius: 50%;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  left: 1px;
  transition: all 0.3s ease-in;

  &.active {
    background-color: $purple;
    left: 26px;
  }
}
</style>
