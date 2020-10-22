<template>
  <client-only>
    <div class="relative">
      <main class="main prose lg:prose-xl" :data-loading="loading">
        <h1>Order</h1>
        <p v-if="!order || order.length === 0">Inga saker tillagda.</p>
        <template v-else>
          <h3>Summering</h3>
          <ul>
            <li v-for="row in order" :key="row.id">
              {{ row.quantity }}x
              <nuxt-link :to="row.url">{{ row.name }}</nuxt-link> á
              {{ row.price }}kr
            </li>
          </ul>
          <p>Totalt {{ totalCost }}kr</p>
          <h3>Kontaktuppgifter</h3>
          <order-form></order-form>
        </template>
      </main>
      <loading v-if="loading" />
    </div>
  </client-only>
</template>

<script>
import { mapState } from 'vuex'
import OrderForm from '@/components/OrderForm'
import Loading from '@/components/Loading'
export default {
  components: { OrderForm, Loading },
  computed: {
    ...mapState({
      order: (state) => state.order.order,
      loading: (state) => state.order.loading,
      totalCost() {
        return this.order.reduce(
          (acc, row) => acc + row.price * row.quantity,
          0
        )
      },
    }),
  },
}
</script>

<style lang="postcss" scoped>
.main[data-loading='true'] {
  @apply opacity-50 pointer-events-none;
}
</style>
