<template>
  <div class="select">
    <button v-on:click="changeState" class="select-body">{{ title }} <img src="../assets/triangle.svg" class="drop"></button>
    <div class="select-options_background">
      <div class="select-options_item">
        <ul v-for="option in options" v-bind:key="option.title">
          <li v-on:click="chooseOption(option.value)">{{ option.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    title: String,
    options: Array
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    changeState () {
      if (this.isOpen) {
        document.getElementsByClassName('select-options_background')[0].style.display = 'none'
        document.getElementsByClassName('drop')[0].style.transform = 'rotate(180deg)'
      } else {
        document.getElementsByClassName('select-options_background')[0].style.display = 'block'
        document.getElementsByClassName('drop')[0].style.transform = 'rotate(0deg)'
      }
      this.isOpen = !this.isOpen
    },
    chooseOption (option) {
      this.changeState()
      this.$emit('value', option)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  cursor: pointer;
}
li:hover {
  color: blue;
}
li:not(:last-of-type) {
  margin-bottom: 10px;
}

.drop {
  margin-left: 10px;
  transform: rotate(180deg);
  transition: .3s;
  width: 10px;
}
.select-body {
  background: #7be07b;
  border: none;
  border-radius: 3px;
  color: white;
  padding: 10px 20px;
}
.select-options_background {
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 10px #dadada;
  display: none;
  padding: 5px 20px;
  position: absolute;
}
</style>
