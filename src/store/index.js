import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	user: undefined
}

const mutations = {
	login(state, player) {
		state.user = player
	},
	logout(state) {
		state.user = undefined
	}
}

const actions = {
	login(context, player) {
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
