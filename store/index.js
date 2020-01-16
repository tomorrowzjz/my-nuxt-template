
import Vuex from 'vuex'
const state = {
  authenticated:false
}
const mutations = {
  SET_AUTH (state, value) {
    state.authenticated = value
  },
}


const createStore = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default createStore
