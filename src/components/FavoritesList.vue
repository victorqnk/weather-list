<template>
  <table class="table-auto border-separate border border-grey-800 mt-5">
    <thead>
      <tr>
        <th class="border border-grey-800 px-5">Ciudad</th>
        <th class="border border-grey-800 px-5">Favorito</th>
      </tr>
    </thead>
    <tbody>
      <FavoriteItem v-for="city in items" :key="city" :city="city" @refresh="loadItems" />
    </tbody>
  </table>
</template>

<script>
import FavoriteItem from './FavoriteItem.vue'

export default {
  components: {
    FavoriteItem
  },
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    loadItems() {
      this.items = []
      for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let item = window.localStorage.getItem(key)
        this.items.push({'id': key, 'name': item})
      }
    }
  }
}
</script>

<style>

</style>