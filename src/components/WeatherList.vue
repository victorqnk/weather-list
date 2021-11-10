<template>
  <table class="table-auto border-separate border border-grey-800 mt-5">
    <thead>
      <tr>
        <th class="border border-grey-800 px-5">City</th>
        <th class="border border-grey-800 px-5">Weather</th>
        <th class="border border-grey-800 px-5">Action</th>
      </tr>
    </thead>
    <tbody>
      <WeatherDetail v-for="city in api" :key="city.name" :city="city" :fav="isFavorite(city.id)" @add="addFavorite(city)" />
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'
import WeatherDetail from './WeatherDetail.vue'

export default {
  name: 'WeatherList',
  components: {
    WeatherDetail
  },
  data() {
    return {
      api: null,
    }
  },
  mounted() {
    this.loadAPI()
  },
  methods: {
    isFavorite(id) {
      return window.localStorage.getItem(id) != null ? true : false
    },
    addFavorite(city) {
      let data = JSON.stringify({'id':city.id, 'temp':city.main.temp, 'name':city.name })
      window.localStorage.setItem(city.id, data)
      this.loadAPI()
    },
    loadAPI() {
      axios
      .get('http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=ee0c6f89dcfbbc9af3c5c25255940dd5')
      .then(response => this.api = response.data.list)
    },
  },
}
</script>

<style>
table {
  margin: 0 auto;
}
</style>