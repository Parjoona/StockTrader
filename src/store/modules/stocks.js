import stocks from '../../fakedb/stocks'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks
    },
    'RANDOM_STOCKS'(state) {

    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order)
    },
    initStock: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStock: ({ commit }) => {
        commit('RANDOM_STOCKS')
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}