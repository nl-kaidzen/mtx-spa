<template>
  <div>
    <h1>Simple table view</h1>
    <CustomTable :table-data="this.recievedData" />
    <button class="button table__button" v-on:click="recieveData">Recieve data from server</button>
  </div>
</template>

<script>
import CustomTable from '../components/CustomTable.vue';

export default {
  name: 'table',
  components: {
    CustomTable,
  },
  methods: {
    recieveData() {
      fetch('https://api.myjson.com/bins/1giyku')
        .then(response => response.json())
        .then((response) => {
          this.recievedData = response;
        });
    },
  },
  data() {
    return {
      recievedData: '',
    };
  },
};
</script>

<style lang="scss">
@import '../assets/helpers/_variables.scss';
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 40px;
  background-color: transparent;;
  border: 2px solid $secondary;
  border-radius: 4px;
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

.table__button {
  margin: 20px auto 0;
}
</style>
