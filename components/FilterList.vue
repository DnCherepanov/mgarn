<template>
  <div class="filter-list">
    <button
      class="filter-list_filter"
      v-for="filter in filters"
      :key="filter"
      :data-filtering="filtering"
      :data-selected="selectedFilters.includes(filter)"
      @click="toggleFilter(filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'FilterList',
  computed: {
    ...mapState(['selectedFilters']),
    ...mapGetters(['filters', 'filtering']),
  },
  methods: {
    ...mapActions(['toggleFilter']),
  },
}
</script>

<style lang="postcss">
.filter-list {
  @apply mb-4;
}

.filter-list_filter {
  @apply font-display lowercase mr-2 px-1 rounded;
}

.filter-list_filter[data-selected='true'] {
  @apply bg-green-200 pl-4 relative;
  &::before {
    @apply absolute bg-contain bg-center bg-no-repeat w-4 h-4;
    content: '';
    background-image: url('~assets/icons/x-small.svg');
    top: 53%;
    left: 1px;
    transform: translateY(-50%);
    pointer-events: none;
  }
}
</style>
