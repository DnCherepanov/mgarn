<template>
  <div class="prose lg:prose-xl">
    <h1 v-if="loading">Laddar...</h1>
    <template v-else>
      <h1>{{ product.fields.name }}</h1>
      <figure
        class="product-image md:absolute rounded overflow-hidden md:shadow"
        v-if="product.fields.attachments"
      >
        <img :src="product.fields.attachments[0].url" alt="Produktbild" />
      </figure>
      <p>{{ product.fields.description }}</p>
      <div class="flex flex-col">
        <label class="label"
          >{{ product.fields.available }} stycken á
          <strong>{{ product.fields.price }}kr</strong> tillgängliga</label
        >
        <div>
          <input
            class="input text-center"
            type="number"
            placeholder="1"
            v-model="quantity"
            min="1"
            :max="product.fields.available"
          />
          <button
            class="button mt-2 ml-1 lg:py-1"
            @click="handleAddProduct"
            :disabled="$v.$invalid"
          >
            Lägg till
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { minValue, maxValue } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    quantity: 1,
    loading: false,
  }),
  validations() {
    if (!this.product) {
      return {}
    } else {
      return {
        quantity: {
          minValue: minValue(1),
          maxValue: maxValue(this.product.fields.available),
        },
      }
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.products.records,
      order: (state) => state.order.order,
    }),
    product() {
      if (!this.products) {
        this.loading = true
      }
      return this.products.find(
        (p) => p.fields.slug === this.$route.params.slug
      )
    },
  },
  methods: {
    ...mapActions({
      addProduct: 'order/addProduct',
    }),
    handleAddProduct() {
      const payload = {
        id: this.product.id,
        name: this.product.fields.name,
        price: this.product.fields.price,
        quantity: this.quantity,
        url: this.$route.fullPath,
      }
      this.addProduct(payload)
    },
  },
}
</script>

<style lang="postcss" scoped>
@media screen and (min-width: 768px) {
  .product-image {
    top: 80px;
    right: 1rem;
    max-width: 28%;
  }
}
</style>
