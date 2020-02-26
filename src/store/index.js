import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elements: [
      { name: 'John', gender: 'Male' },
      { name: 'Sarah', gender: 'Female' },
      { name: 'Tisha', gender: 'Female' },
      { name: 'Grisha', gender: 'Male' }
    ],
    filter: ''
  },
  getters: {
    filteredElements: state => {
      if (state.filter !== '') {
        return state.elements.filter(element => element.gender === state.filter)
      } else {
        return state.elements
      }
    }
  },
  mutations: {
    appendElement (state, element) {
      state.elements.push(element)
    },
    removeLastElement (state) {
      state.elements.splice(-1, 1)
    },
    setFilter (state, filter) {
      state.filter = filter
    }
  },
  actions: {
  },
  modules: {
  }
})
