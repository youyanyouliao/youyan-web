import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            phone: '',
            password: ''
        },
        isLogin: false,
    },
    mutations: {
        setUser(state, user) {
            state.user.phone = user.phone;
            state.user.password = user.password;
            state.isLogin = true;
        },
        resetUser(state) {
            state.user.phone = '';
            state.user.password = '';
            state.isLogin = false;
        }
    }
})

