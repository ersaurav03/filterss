export const fruitmix = {
	data:function(){
       return{

             fruits:['Apple','Mango','Banana','Grapes','Melon'],
             filterText:''
       }
},

computed:{
filterFruits(){
  return this.fruits.filter((element) => {
   return element.match(this.filterText);
  });
}
},
created(){
  console.log("created");
}
};