<template>
  <div>
    <h1>Simple graphic with 200 dots</h1>
    <div id="chart">
      <LineChart :chart-data="datacollection" :options="options"/>
    </div>
    <div class="settings">
      <h1 class="settings__header">Settings</h1>
      <div class="settings__toggle-wrap">
        <h2 class="settings__label-toggle">Use my custom settings: </h2>
        <div class="toggle-body" :class="{'active': custom}" v-on:click="custom = !custom">
          <span class="toggle" :class="{'active': custom}"
            ></span>
        </div>
      </div>
      <div class="settings__custom" v-show="custom">
        <label class="settings__label" for="">Delay between generating dots
          <input class="settings__input" type="text" name="" id="" v-model="delay">
        </label>
        <label class="settings__label" for="">Max count of dots at chart
          <input class="settings__input" type="text" name="" id="" v-model="maxItems">
        </label>
        <label class="settings__label" for="">Genereting cycle time limit
          <input class="settings__input" type="text" name="" id="" v-model="timeLimit">
        </label>
      </div>
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
        scales: {
          xAxes: [{
            display: true,
            stacked: true,
            ticks: {
              min: 0, // minimum value
              max: 200, // maximum value
              beginAtZero: true,
            },
          }],
        },
      },
      maxItems: 300,
      index: 0,
      min: -50,
      max: 50,
      dataDotsArray: [],
      dataLabelsArray: [],
      delay: 30,
      timeLimit: 15000,
      custom: false,
    };
  },
  methods: {
    startTimer() {
      const timerId = setInterval(this.generateData, this.delay, this.index);
      setTimeout(() => clearInterval(timerId), this.timeLimit);
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
      if (this.dataDotsArray.length < this.maxItems) {
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
  border: 2px solid $secondary;
  border-radius: 4px;
  margin: 20px auto 0;
  padding: 0 20px;
  cursor: pointer;
  color: $secondary;
  font-size: 16px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;

  &:hover,
  &:focus {
    background-color: $secondary;
    color: $text;
  }
}

.text-big {
  width: 100%;
  font-size: 16px;

  @media (min-width: 1200px) {
    font-size: 24px;
    width: 70%;
    text-align: left;
    margin: 20px auto;
  }
}

h2 {
  font-size: 16px;

  @media (min-width: 1200px) {
    font-size: 24px;
  }
}

.settings {
  &__input {
    display: flex;
    align-items: center;
    border: 2px solid $whitesmoke;
    width: 30%;
    border-radius: 4px;
    font-size: 16px;
    padding: 15px 10px;

    @media (min-width: 1200px) {
      font-size: 20px;
      padding: 15px 20px;
    }
  }

  &__toggle-wrap {
    display: flex;
    margin: 10px 0 0;
    align-items: center;

    @media (min-width: 1200px) {
      margin: 20px 15% 0;
    }
  }

  &__label {
    color: $text;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    width: 100%;
    margin: 10px 0 0;
    box-sizing: border-box;

    @media (min-width: 1200px) {
      font-size: 20px;
      width: 90%;
      margin: 20px 5% 0;
    }
  }

  &__label-toggle {
    margin: 0;
    margin-right: 20px;
  }

  &__custom {
    user-select: none;
  }
}

.toggle-body {
  display: flex;
  background-color: whitesmoke;
  width: 50px;
  height: 20px;
  border-radius: 10px;
  position: relative;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &.active {
    border-color: $primary;
    background-color: $primary-lighter;
  }
}

.toggle {
  position: absolute;
  display: block;
  width: 25px;
  height: 25px;
  background-color: #c5c5c5;
  border-radius: 50%;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  left: -3px;
  transition: all 0.3s ease-in;

  &:focus,
  &:hover {
    box-shadow: 0px 0px 0px 10px rgba(197,197,197,0.5);
  }

  &.active {
    background-color: $primary;
    left: 26px;

    &:focus,
    &:hover {
      box-shadow: 0px 0px 0px 10px rgba(24,103,192,0.35);
    }
  }
}
</style>
