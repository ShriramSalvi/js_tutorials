// here we trying to explore functions for topic like hoisting 

// ++++++++++++++ HOISTING +++++++++++++
 // there are two method of declaring function

 // type 1 
   console.log(add(6))
  function add( num ){
    return num+5;
  }
  console.log(add(8))

  //  in above type the function calling is allowed before declaration and after declaration also


  // type 2

  let myFunction = function addNumbers(num1,num2){
    return num1+num2;
  }

  console.log(myFunction(6,7)); /// in this type we can call the function after declaration only


  /// ++++++++ concept of this, => function ++++++++++++///

  /// this refferse to current instance similar to cpp 


     
  // note1 ------> "this" with normal functions<-----------------

//   function myFun(){
//     console.log("using this in normal function");
//     console.log(this) ///  output returned is a global object which includes so many thigs
//   }

//   myFun();



  // note 2-------> this with arrow function<--------------

  let myfun2 = ()=>{
    console.log("using this with arrow function");
    console.log(this); /// here output is {} i.e empty object
  }
  myfun2();


  /// whenever we use { } curly brackets we have to use "return" if the function is returning somethig 

  let myfun3 = (num1,num2)=>(num1+num2); /// no need of return /// auto  returns the addition
                                         /// this syntax used to return object ex
                                         // ({name:"shriram salvi"})


//+++++++IIFE : Immediately invoked function expression +++++++++///

/* Usage : 1) to avoid global variable polution
           2) ex used in DB connections */ 
// syntax ()(); first () used for defination and declaratiion and second  () for calling 
             // and ";" used for termination example 

(function myfun4(){
    console.log("DB connected")
})();

(()=>{
    console.log("DB connection 2")
})();  ///i.e IIFE can be created using arrow function as well as non arrow functions
