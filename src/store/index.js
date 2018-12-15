import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	user: undefined,
	logined: 0
}

const mutations = {
	login(state, player) {
		state.user = player
		state.logined = 1
	},
	logout(state) {
		state.user = undefined
		state.logined = 0
	}
}

const actions = {
	loginAction(context) {
		let player = sessionStorage.getItem('user')
		context.commit('login', player)
	},
	logout(context) {
		context.commit('logout')
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
