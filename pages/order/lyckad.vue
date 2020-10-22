<template>
  <main class="prose lg:prose-xl">
    <template v-if="error">
      <h1>Det blev nåt fel</h1>
      <p>
        Någonting hände som inte var tanken. Spara fliken uppe så kommer den
        ihåg din order och försök igen lite senare.
      </p>
    </template>
    <template v-else>
      <h1>Ordern mottogs</h1>
      <p>
        Nu kommer jag titta i garnskåpet och se så att allt du vill ha finns
        kvar (lager uppdateras manuellt), sen skickar jag ett mail med
        betalningsuppgifter och om det skulle vara så att något tyvärr är slut
        eller inte finns så många som du vill ha.
      </p>
      <nuxt-link to="/">Tillbaka</nuxt-link>
    </template>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      error: (state) => state.order.error,
    }),
  },
}
</script>

<style></style>
