import Vue from 'vue';

export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(res => res.json())
        .then(json => {
            if (json) {
                const stocks = json.stocks
                const funds = json.funds
                const stockPortfolio = json.stockPortfolio
        
                let portfolio = {
                    stockPortfolio,
                    funds
                }
        
                commit('SET_STOCKS', stocks)
                commit('SET_PORTFOLIO', portfolio)
            }
        })
}