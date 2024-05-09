// function one(username){
//   function two(){
//     console.log("komal")
//   }
//   two()
// }
// one()
// if(true){
//   const username ="komolika"
//   if (username==="komolika"){
//     const website =" netflix"
//     console.log(username + website);
//   }
// }   

const user={
  name : "komal",
  age  : 18 ,
  message : function(){
      console.log(`${this.name}    welcome to website` );
      console.log(this)
  }
}
console.log(this)
user.message()