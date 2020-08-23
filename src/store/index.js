import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

import goods from './goods'

export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		goods
	}
}) 