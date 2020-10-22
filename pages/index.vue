<template>
  <main class="main">
    <filter-list></filter-list>
    <product-list></product-list>
  </main>
</template>

<script>
import FilterList from '@/components/FilterList'
import ProductList from '@/components/ProductList'
export default {
  components: {
    FilterList,
    ProductList,
  },
}
</script>

<style lang="postcss" scoped>
.main {
  @apply flex flex-col;
}
</style>
