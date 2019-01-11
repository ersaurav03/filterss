<template>
  <div>

       	 	<h1>Filter  Mixings</h1>
          <input v-model="filterText">
          <ul>
            <li v-for="fruit in filterFruits">{{fruit}}</li>
          </ul>

  </div>
</template>

<script>
  import { fruitmix } from '../Mixing';
export default {
mixins : [fruitmix]
}
</script>
