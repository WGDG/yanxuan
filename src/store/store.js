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
    coding: false,
    pingtuancode: false,
    guige: [],
    num: 1,
    guigec:[],
    color:[],
    guigecc: [],
    colorc: [],
    yoursShopping: [],
    morenress: [],
    addToCart: [],
    list: [],
    bian: true,
    checkAll: true,
    checked: false,
    totalPrice: '',
    shoppingList: [],
    cutPrice: []
  },
  getters:{
    getStorage: function(state) {
      if(state.shoppingList = []){
        state.shoppingList = JSON.parse(window.localStorage.getItem('shoppingList'))
      }
      return state.shoppingList
    },
    cutStorage: function (state) {
      if(state.cutPrice = []){
        state.cutPrice = JSON.parse(window.localStorage.getItem('cutPrice'))
      }
      console.log(state.cutPrice);
      return state.cutPrice
    }
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
    cartModel(state, payLoad){
      state.num = 1
      state.coding = true
    },
    demodel(state,payLoad) {
      state.code = false
    },
    demodel2(state,payLoad) {
      state.coding = false
    },
    demodel3(state){
      state.pingtuancode = false
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
    },
    shoppingCart(state, payLoad){
      console.log(payLoad);
      state.shoppingList = payLoad
      let temp = JSON.parse(localStorage.getItem('shoppingList')) || [];
      temp.push(state.shoppingList)
      window.localStorage.setItem('shoppingList', JSON.stringify(temp))
    },
    list(state,payLoad){
      state.list = payLoad
    },
    bian(state,payLoad){
      state.bian === false ? state.bian = true : state.bian = false
    },
    checkAll(state) {
      state.checkAll === false ? state.checkAll = true : state.checkAll = false
      console.log(state.checkAll);
    },
    checked(state,) {
      state.checked === true ? state.checked = false : state.checked = true
    },
    totalPrice(state,payLoad){
      state.totalPrice = payLoad
    },
    decrementShoppingCart(state,payLoad){

      let denum = state.list[payLoad].num
      if(denum > 0){
        denum --
      }
      state.list[payLoad].num = denum
      window.localStorage.setItem('shoppingList',JSON.stringify( state.list))
    },
    incrementShoppingCart(state,payLoad){
      let denum = state.list[payLoad].num
      denum ++
      state.list[payLoad].num = denum
      window.localStorage.setItem('shoppingList',JSON.stringify( state.list))
    },
    detail(state ){
      console.log(state.checkAll);
      if(state.checkAll === true){
        state.shoppingList = []
      }
      window.localStorage.setItem('shoppingList',JSON.stringify( state.shoppingList))
    },
    pingtuanModel(state) {
      state.pingtuancode = true
    },
    kaituan(state,payLoad) {
      console.log(payLoad);
    },
    cutPrice(state,payLoad) {
      console.log(payLoad);
      state.cutPrice = payLoad
      let cut = JSON.parse(window.localStorage.getItem('cutPrice')) || []
      cut.push(state.cutPrice)
      window.localStorage.setItem('cutPrice', JSON.stringify(cut))
    },
    nowPrice(state, payLoad){
      state.yoursShopping = payLoad
      window.localStorage.setItem('yoursShopping', JSON.stringify(state.yoursShopping))
    }

  }
})

export default store
