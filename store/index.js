const initialState = {
  products: null,
  selectedFilters: [],
}

export const state = () => ({ ...initialState })

export const getters = {
  filtering({ selectedFilters }) {
    return selectedFilters.length > 0
  },
  filteredProducts({ products, selectedFilters }) {
    return products.records.filter((product) =>
      product.fields.categories.some((category) =>
        selectedFilters.includes(category)
      )
    )
  },
  filters({ products }) {
    return [
      ...new Set(
        products.records.reduce(
          (filters, product) => [...filters, ...product.fields.categories],
          []
        )
      ),
    ]
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const products = await this.$axios.$get(
      `https://api.airtable.com/v0/appFHp7KtPWuoZd4B/Products?view=Grid%20view&api_key=${this.$config.airtableKey}`
    )
    commit('updateProducts', products)
  },
  toggleFilter({ commit, state }, filter) {
    if (state.selectedFilters.includes(filter)) {
      commit('removeFilter', filter)
    } else {
      commit('addFilter', filter)
    }
  },
}

export const mutations = {
  updateProducts(state, products) {
    console.log('products', products) // eslint-disable-line no-console
    state.products = products
  },
  addFilter(state, filter) {
    state.selectedFilters = [...state.selectedFilters, filter]
  },
  removeFilter(state, filter) {
    const index = state.selectedFilters.indexOf(filter)
    state.selectedFilters.splice(index, 1)
  },
}
