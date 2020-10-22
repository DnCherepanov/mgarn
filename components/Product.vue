<template>
  <nuxt-link :to="url" class="product">
    <div class="product-image" :style="image"></div>
    <div class="product-description">
      <h2 class="text-xl">{{ fields.name }}</h2>
      <span class="font-display lowercase">{{
        fields.categories.join('&nbsp;&nbsp;')
      }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Product',
  props: {
    fields: {
      type: Object,
      required: true,
    },
  },
  computed: {
    image() {
      return this.fields.attachments
        ? `background-image: url(${this.fields.attachments[0].url});`
        : ''
    },
    url() {
      return `/produkt/${this.fields.slug}`
    },
  },
}
</script>

<style lang="postcss" scoped>
.product {
  @apply shadow rounded-lg bg-white overflow-hidden;
}

.product-image {
  @apply pt-48 bg-cover bg-no-repeat bg-center bg-gradient-to-r from-gray-100 to-gray-100;
}

.product-description {
  @apply p-3;
}
</style>
