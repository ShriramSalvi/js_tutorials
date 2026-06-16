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
