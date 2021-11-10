<template>
  <tr>
    <td>{{ city.name }}</td>
    <td class="text-center font-bold">{{ city.temp }}°</td>
    <td class="text-center">
      <button class="text-red-400 text-sm" @click="removeFavorite">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeFavorite() {
      window.localStorage.removeItem(this.city.id)
      this.$emit('refresh', true)
    }
  }
}
</script>
