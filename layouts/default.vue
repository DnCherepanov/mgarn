<template>
  <div class="container mx-auto flex flex-col relative pb-4">
    <header class="header px-2 md:px-4 mb-4">
      <nuxt-link to="/" class="flex items-center">
        <Logo class="text-gray-800" />
        <h1
          class="text-gray-800 text-3xl antialiased tracking-wide font-display ml-2"
        >
          Mors Garn
        </h1>
      </nuxt-link>
      <nav class="space-x-2">
        <nuxt-link class="header_nav-link" to="/om-oss">om oss</nuxt-link>
        <nuxt-link class="header_nav-link" to="/order"
          >order (<span class="font-mono text-sm">{{ count }}</span
          >)</nuxt-link
        >
      </nav>
    </header>
    <Nuxt class="px-2 md:px-4" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '@/components/Logo'
export default {
  components: { Logo },
  computed: {
    ...mapGetters({
      count: 'order/count',
    }),
  },
}
</script>

<style lang="postcss">
:root {
  --bg-color: #fffefb;
}

html {
  background-color: #fffefb;
  background-color: var(--bg-color);
}

body {
  @apply font-body text-gray-800;
}
/* Global component styles */
.input {
  @apply border border-gray-400 rounded px-3 text-base py-1;
  &:hover,
  &:focus {
    @apply border-gray-800;
  }
  &[disabled='disabled'] {
    @apply opacity-75 cursor-not-allowed;
  }
  &[disabled='disabled']:hover {
    @apply border-gray-400;
  }
}

.label {
  @apply font-display text-sm lowercase;
}

.button {
  @apply input label text-base min-w-0 bg-white;
}

/* View specific styles */
.header {
  @apply flex justify-between items-center z-10;
  position: sticky;
  top: 0;

  height: 80px;
  background-color: #fffefb;
  background-color: var(--bg-color);
}

.header_nav-link {
  @apply font-display text-lg text-gray-800;
}
</style>
