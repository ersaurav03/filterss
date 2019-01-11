<template>
  <div class="container">
       <div class="row">
       	 <div class="col-sm-12">
       	 	<h1>Filter  Mixings</h1>
       	 	<p>{{text | toUppercase | to-lowercase}}</p>
          <hr>
          <button @click="fruits.push('Pumpkin Seeds')">Add Items</button>
          <hr>
          <input v-model="filterText">
          <ul>
            <li v-for="fruit in filterFruits">{{fruit}}</li>
          </ul>
       	 </div>
         <hr>
         <List></List>
       </div>
  </div>
</template>

<script>
  import List from './List.vue';
  import { fruitmix } from '../Mixing';
export default {
  mixins:[fruitmix],
  components:{
List
  },
data:function(){
       return{
             text: 'JSMPJ Corporation'

       }
},
filters:{
	toUppercase(value){
		return value.toUpperCase();
	}
}
}
</script>
