import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    picsList: [],
    basicInfo: [],
    content: {},
    specialList: []
  },
  mutations:{
    pics(state, payLoad){
      state.picsList = payLoad
    },
    basicInfo(state,payLoad){
      state.basicInfo = payLoad
    },
    content(state,payLoad){
      state.content = payLoad
    },
    specialList(state,payLoad){
      state.specialList = payLoad
    }
  }
})

export default store
