<template>
  <table class="table">
    <tbody>
      <tr>
        <td class="table-cell table-cell--heading">Name</td>
        <td class="table-cell">Andrey</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">Last</td>
        <td class="table-cell">Khabarow</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">Country</td>
        <td class="table-cell">Germany</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">City</td>
        <td class="table-cell">Munich</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">Zip Code</td>
        <td class="table-cell">640112</td>
      </tr>
      <tr>
        <td class="table-cell table-cell--heading">OS</td>
        <td class="table-cell">MacOS</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CustomTable',
};
</script>
<style lang="scss">
  @import '../assets/helpers/_variables';
  .table {
    width: 70%;
    margin: 0 auto;
    font-size: 24px;
    border: 2px solid $purple;
    border-collapse: collapse;

    &-cell {
      padding: 20px 30px;
      border: 2px solid $purple;
    }

    &-cell--heading {
      text-align: left;
    }
  }
</style>
