<template>
  <form
    class="order-form"
    @submit.prevent="sendOrder({ name, email, street, zip, city })"
  >
    <div class="order-form_row">
      <div class="order-form_row_item">
        <label class="label">Namn</label>
        <input
          class="input"
          v-model="name"
          type="text"
          placeholder="Namn Namnovich"
        />
      </div>
      <div class="order-form_row_item">
        <label class="label">Email</label>
        <input
          class="input"
          v-model="email"
          type="email"
          placeholder="namn.namnovich@mail.se"
        />
      </div>
    </div>
    <div class="order-form_row">
      <div class="order-form_row_item order-form_row_item--full">
        <label class="label">Adress</label>
        <input
          class="input"
          v-model="street"
          type="text"
          placeholder="Gatvägen 11"
        />
      </div>
    </div>
    <div class="order-form_row">
      <div class="order-form_row_item order-form_row_item--third">
        <label class="label">Postnummer</label>
        <input class="input" v-model="zip" type="text" placeholder="12345" />
      </div>
      <div class="order-form_row_item order-form_row_item--two-thirds">
        <label class="label">Ort</label>
        <input class="input" v-model="city" type="text" placeholder="Stadby" />
      </div>
    </div>
    <div class="order-form_row">
      <button class="button mt-5 ml-auto" type="submit" :disabled="$v.$invalid">
        Skicka order
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'OrderForm',
  data: () => ({
    name: '',
    email: '',
    street: '',
    zip: '',
    city: '',
  }),
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    street: {
      required,
    },
    zip: {
      required,
    },
    city: {
      required,
    },
  },
  methods: {
    ...mapActions({
      sendOrder: 'order/sendOrder',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.order-form,
.order-form_row_item {
  @apply flex flex-col;
}

.order-form_row {
  @apply flex flex-wrap justify-between;
}

.order-form_row_item {
  flex-basis: 100%;
}

.order-form_row_item--third {
  flex-basis: calc(33% - 0.5rem);
}

.order-form_row_item--two-thirds {
  flex-basis: calc(67% - 0.5rem);
}

@media screen and (min-width: 768px) {
  .order-form_row_item {
    flex-basis: calc(50% - 0.5rem);
  }

  .order-form_row_item--full {
    flex-basis: 100%;
  }

  .order-form_row_item--third {
    flex-basis: calc(33% - 0.5rem);
  }

  .order-form_row_item--two-thirds {
    flex-basis: calc(67% - 0.5rem);
  }
}
</style>
