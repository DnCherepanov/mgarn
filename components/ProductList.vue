<template>
  <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
    <product
      v-for="product in products"
      :key="product.id"
      :fields="product.fields"
    ></product>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Product from './Product'
export default {
  name: 'ProductList',
  components: {
    Product,
  },
  computed: {
    ...mapGetters(['filtering', 'filteredProducts']),
    ...mapState({
      allProducts: (state) => state.products.records,
    }),
    products() {
      if (this.filtering) {
        return this.filteredProducts
      } else {
        return this.allProducts
      }
    },
  },
}
</script>
