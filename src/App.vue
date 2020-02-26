<template>
  <div id="app">
    <div class="add-form">
      <input placeholder="Name" v-model="newElementName">
      <div class="gender-wrapper">
        <input type="radio" name="gender" id="radioGenderMale" v-model="newElementGender" value="Male">
        <label for="radioGenderMale">Male</label>
        <input type="radio" name="gender" id="radioGenderFmMale" v-model="newElementGender" value="Female">
        <label for="radioGenderFemale">Female</label>
      </div>
      <button class="action-button" v-on:click="addElement">Add to list</button>
      <button class="action-button" v-on:click="removeLastElement">Remove Last</button>
      <Select title="Filter" v-bind:options="filters" @value="filterElements"></Select>
    </div>
    <div class="list-header">
      <span class="list-header_title">Name</span>
      <span class="list-header_title">Gender</span>
    </div>
    <div class="list-body">
      <div class="list-body_element" v-for="el in elements" v-bind:key="el.name">
        <span class="list-body_element-name">{{ el.name }}</span>
        <span class="list-body_element-gender">{{ el.gender }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Select from './components/Select'

export default {
  name: 'App',
  components: { Select },
  data () {
    return {
      newElementName: '',
      newElementGender: 'Male',
      filters: [
        { value: '', title: 'All' },
        { value: 'Male', title: 'Male' },
        { value: 'Female', title: 'Female' }
      ]
    }
  },
  computed: {
    elements () {
      return this.$store.getters.filteredElements
    }
  },
  methods: {
    addElement () {
      const newElement = {
        name: this.newElementName,
        gender: this.newElementGender
      }

      if (newElement.name !== '') {
        this.$store.commit('appendElement', newElement)
        this.newElementName = ''
      } else {
        alert('Field name can not be empty')
      }
    },
    removeLastElement () {
      this.$store.commit('removeLastElement')
    },
    filterElements (gender) {
      this.$store.commit('setFilter', gender)
    }
  }
}
</script>

<style>
  * {
    font-family: Tahoma;
    font-size: 13px;
  }
  body {
    display: flex;
    justify-content: center;
  }

  #app {
    width: 50%;
  }

  .action-button {
    background: #7be07b;
    border: none;
    border-radius: 3px;
    color: white;
    margin-right: 10px;
    padding: 10px 20px;
  }
  .add-form {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .add-form input {
    border: 1px solid #b9b9b9;
    border-radius: 3px;
    padding: 10px 0 10px 10px;
  }
  .gender-wrapper {
    margin: 0 auto 0 auto;
  }
  .list-body_element {
    border: 1px solid #b9b9b9;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 20px;
  }
  .list-header {
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    margin: 10px 0;
    padding: 0 20px;
  }
</style>
