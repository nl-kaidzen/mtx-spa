<template>
  <table class="table">
    <tbody>
      <tr>
        <td class="table-cell table-cell--heading">Name</td>
        <td class="table-cell">{{this.tableData.name}}</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">Last</td>
        <td class="table-cell">{{this.tableData.lastname}}</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">Country</td>
        <td class="table-cell">{{this.tableData.country}}</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">City</td>
        <td class="table-cell">{{this.tableData.city}}</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">Zip Code</td>
        <td class="table-cell">{{this.tableData.zipcode}}</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">OS</td>
        <td class="table-cell">{{this.tableData.os}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CustomTable',
  props: ['tableData'],
};
</script>
<style lang="scss">
  @import '../assets/helpers/_variables';
  .table {
    width: 70%;
    margin: 0 auto;
    font-size: 24px;
    border: 2px solid $primary;
    border-collapse: collapse;

    &-cell {
      padding: 20px 30px;
      border: 2px solid $primary;
    }

    &-cell--heading {
      text-align: left;
    }
  }
</style>
