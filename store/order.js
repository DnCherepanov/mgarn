const initialState = () => ({
  order: [],
  error: null,
  loading: false,
})

export const state = initialState()

export const getters = {
  count({ order }) {
    return order.length
  },
}

export const actions = {
  addProduct({ commit, state }, product) {
    const index = state.order.findIndex((row) => row.id === product.id)
    if (index === -1) {
      commit('addProduct', product)
    } else {
      commit('updateProduct', { product, index })
    }
  },
  removeProduct({ commit }, product) {
    commit('removeProduct', product)
  },
  async sendOrder({ commit, state }, recipient) {
    try {
      commit('setLoading', true)
      await this.$axios.$post('/api/order', {
        ...recipient,
        order: state.order,
      })
      this.$router.replace('/order/lyckad')
      commit('reset')
    } catch (error) {
      commit('setError', error)
      commit('setLoading', false)
    }
  },
}

export const mutations = {
  addProduct(state, product) {
    state.order = [...state.order, product]
  },
  updateProduct(state, { product, index }) {
    state.order[index] = product
  },
  removeProduct(state, product) {
    const index = state.order.findIndex((row) => row.id === product.id)
    state.order.splice(index, 1)
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setError(state, error) {
    state.error = error
  },
  reset(state) {
    Object.assign(state, initialState())
  },
}
