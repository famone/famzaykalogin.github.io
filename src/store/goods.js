
import axios from 'axios'

const goods = {
	namespaced: true,
	state: {
		logined: false
  	},
	mutations: {
	  	SET_LOGIN(state){
	  		state.logined = true	  		
	  	},
	  	SET_LOGINOUT(state){
	  		state.logined = false	  		
	  	}
  	},
	actions: {
		loginedMt({commit}){
			commit('SET_LOGIN')
		},
		logout({commit}){
			commit('SET_LOGINOUT')
		}
	},
	getters: {
  		
	}
}

export default goods


