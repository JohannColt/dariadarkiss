import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      blockCounter: 0,
      pageCounter: 0,
      headerState: 0
    },
    mutations: {
      changeToZeroBlock(state) {
        state.blockCounter = 0;
      },
      changeToOneBlock(state) {
        state.blockCounter = 1;
      },
      changeToTwoBlock(state) {
        state.blockCounter = 2;
      },
      changeToThreeBlock(state) {
        state.blockCounter = 3;
      },
      changeToZeroPage(state) {
        state.pageCounter = 0;
      },
      changeToOnePage(state) {
        state.pageCounter = 1;
      },
      changeToOneHeader(state){
        state.headerState = 1;
      },
      changeToZeroHeader(state){
        state.headerState = 0;
      }
    },
    getters: {
      blockNumber: state => {
        return state.blockCounter;
      },
      pageNumber: state =>{
        return state.pageCounter;
      },
      headerNumber: state =>{
        return state.headerState;
      }
    }
  })

export default store
