
// function b () {
//   function a(){
//     console.log(x);
//   }
//   const x = 10;
//   a();
// }
// const x = 20;
// b();
// 'use strict'
// const x = {
//   a:1,
//   b:2,
//   add: () =>{
//     return this.a + this.b;
//   }
// }
// console.log(x.add());

// let a = {
//   eat:true
// }
// let r = Object.create(a);
// let j = new r;// r is not a constructor (error)
//  'use strict'
// var username;

// function f(){
//   let mesg = "test";
//   console.log(mesg);
// }
// f();

// module.exports and exports are same will point to same {} 
// reassign exports will clear exist value
// module.exports = {
//   f
// }

// exports.test =function (){
//   console.log("vij");
//   return 'ret';
// }
// exports.name = "name";
// console.log(module.exports)
// console.log(exports);

// exports.getFirstname = function () {
//   console.log('Josh');
// };
// exports = {
//   getLastname: function(){
//       console.log('Edward');
//   }
// }
// module.exports = function (){
//   console.log('Josh Edward');
// }
// console.log(module.exports);

const result = (function(exports, module){

  exports = module.exports;

  exports.firstname = 'John';

  module.exports.lastname = 'Smith';

  exports = {

      getFullName: function(){

          console.log('John Smith')

      }

  }

  return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);
