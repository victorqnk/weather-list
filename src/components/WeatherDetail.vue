<template>
  <tr>
    <td>{{ city.name }}</td>
    <td class="text-center"><b>{{ city.main.temp }}°</b></td>
    <td class="text-center">
      <p v-if="fav" class="text-sm text-yellow-400 font-bold">Favorito</p>
      <button class="text-sm" @click="addFavorite" v-else>Agregar</button>
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
    fav: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    addFavorite() {
      this.$emit('add', true)
    }
  }
}
</script>

<style>
.icon {
  width: 18px;
  height: 18px;
}
</style>