<template>
  <div class="container">
       <div class="row">
       	 <div class="col-sm-12">
       	 	<h1>Filter  Mixings</h1>
       	 	<p>{{text | toUppercase}}</p>
       	 </div>
       </div>
  </div>
</template>

<script>
export default {
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
