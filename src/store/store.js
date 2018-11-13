import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    picsList: [],
    basicInfo: [],
    content: {},
    specialList: [],
    code: false,
    guige: [],
    num: 1,
    guigec:[],
    color:[],
    guigecc: [],
    colorc: [],
    yoursShopping: [],
    morenress: []
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
    },
    model(state,payLoad){
      state.code = true
    },
    demodel(state,payLoad) {
      state.code = false
    },
    guige(state,payLoad) {
      state.guige = payLoad

    },
    specification(state,payLoad) {
      state.code = true
    },
    decrement(state,payLoad) {
      if(state.num <= 1){
        state.num = 1
      }else {
        state.num --
      }
    },
    increment(state,payLoad) {
      state.num ++
    },
    color(state,payLoad){
      state.color = payLoad
    },
    guigec(state,payLoad) {
      state.guigec = payLoad
    },
    colorc(state,payLoad){
      state.colorc = payLoad
    },
    guigecc(state,payLoad) {
      state.guigecc = payLoad
    },
    nums(state,payLoad){
      console.log(payLoad);
      state.yoursShopping = payLoad
      window.localStorage.setItem('yoursShopping', JSON.stringify(state.yoursShopping))
    },
    morenress(state,payLoad) {
      state.morenress = payLoad
    }
  }
})

export default store
