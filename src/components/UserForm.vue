<template>
  <form action="POST" class="form" id="form">
    <div class="form-row  form-row--double">
      <label for="" class="form-label">
        First Name*
        <input type="text" name="first-name" class="form-input" v-model="firstName">
      </label>
      <label for="" class="form-label">
        Last Name*
        <input type="text" name="last-name" class="form-input" v-model="lastName">
      </label>
    </div>
    <div class="form-row">
      <label for="" class="form-label">
        Choose your country*
        <select name="" id="" class="form-select" v-model="country" required>
          <option value="Russia">Russia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
        </select>
      </label>
    </div>
    <div class="form-row  form-row--double">
      <label for="" class="form-label">
        City*
        <input type="text" name="first-name" class="form-input" v-model="city" required>
      </label>
      <label for="" class="form-label">
        Zip Code
        <input type="text" name="last-name" class="form-input" v-model="zipCode">
      </label>
    </div>
    <div class="form-row">
      <button class="form-button" v-on:click="onSaveClick">Save Data</button>
    </div>
    <div class="data-container">
      <h1>This data collected from Form Real-time</h1>
      <p>First name: {{firstName}}</p>
      <p>Last name: {{lastName}}</p>
      <p>Country: {{country}}</p>
      <p>City: {{city}}</p>
      <p>Zip Code: {{zipCode}}</p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      zipCode: '',
    };
  },
  computed: {
    formData: function fn() {
      return {
        name: this.firstName,
        family: this.lastName,
        country: this.country,
        city: this.city,
        zipCode: this.zipCode,
      };
    },
  },
  methods: {
    onSaveClick: function onSaveClick(event) {
      event.preventDefault();
      // eslint-disable-next-line no-alert
      alert('See inside console');
      // eslint-disable-next-line no-console
      console.dir(JSON.stringify(this.formData));
    },
  },
};
</script>
<style lang="scss">
  @import '../assets/helpers/_variables.scss';

  h1 {
    font-size: 18px;

    @media (min-width: 1200px) {
      font-size: 24px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    background-color: $surface;
    box-sizing: border-box;

    @media (min-width: 1200px) {
      width: 60%;
      margin-left: 10%;
      margin-right: 30%;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                  0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                  0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }

    &-row {
      display: flex;
      justify-content: space-between;
      padding-top: 10px;

      @media (min-width: 1200px) {
        padding: 5% 5% 0;
        width: 100%;
      }

      &--double {
        .form-label {
          width: 45%
        }
      }

      &:last-of-type {
        padding-bottom: 5%;
      }
    }

    &-label {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      color: $text;
      align-items: flex-start;
      width: 100%;

      @media (min-width: 1200px) {
        font-size: 24px;
      }

      .form-input,
      .form-select {
        font-size: 16px;
        display: flex;
        align-items: center;
        border: 2px solid $whitesmoke;
        width: 100%;
        margin-top: 10px;
        border-radius: 4px;
        padding: 10px 10px;

        @media (min-width: 1200px) {
          font-size: 20px;
          padding: 15px 20px;
        }

        &:invalid {
          border-color: $error;
        }
      }

      .form-select {
        width: 100%;
        background-color: $white;
        &:invalid {
          border-color: $error;
        }
      }
    }

    &-button {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      height: 40px;
      background-color: transparent;;
      border: 2px solid $secondary;
      border-radius: 4px;
      margin: 0 auto;
      padding: 0 20px;
      cursor: pointer;
      color: $text;
      font-size: 16px;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;

      &:hover,
      &:focus {
        background-color: $secondary;
      }
    }
  }
</style>
