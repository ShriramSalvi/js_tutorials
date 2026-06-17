// ++++++++ LOOPS +++++++++

// forof loop ------> for iterable things like array,strings etc

 let myarr = [1,34,5,55,2445,214,5,244,52314];

// for(let it of myarr){
//     console.log(it);
// }

// +++++++++forof loop on maps++++++++++

// let mp = new Map();

// mp.set('a',"grade1")
// mp.set('b',"grade2")
// mp.set('c',"grade3")
// mp.set('d',"grade4")

// for(let [key,val] of mp){
//   console.log(key,val);
// }



/// for in --------> for non iterable things like objects etc cant be used on iterable one
   //+++++ note++++
      /// for in loop mainly fetches keys ////suppose if we have ///arrays then idx=key
                                                                 // object then key = key
        /// hence we can use for in loop on arrays also 
let myobj = {
  "city1":"mumbai",
  "city2":"pune",
  "city3":"ratnagiri"
}
let myarr2 = [1,34,5,55,2445,214,5,244,52314];

// for(let key in myobj){
//   console.log(key); // prints keys only
//   console.log(myobj[key]); // prints values
// }


// for(let key in myarr2){
//   console.log(key)  /// here key refferse to array index
//   console.log(myarr2[key]) /// to fetch the values at key
// }


// !!!!!!!!!!!!!!forEach loop !!!!!!!!!!!!!!!!!!
  // it expectes a call back function

// let myarr3 = [112,42,7,722,2422,9965,2231,78964];

//   myarr3.forEach((val,idx,arr)=>{
//    /// not neccessarily we have to write all 3 parameter 
//    //  idx ----> index
//    ///  val ----> value at idx
//    //// arr ----> whole array
//    console.log(`index is ${idx} value at idx is ${val}`);
// })


/// forEach loop on array consisting objects 
//  let myarr4 = [
//   {
//     "sub":"english",
//     "id": 3,
//     "courseCode":7
//   },
//   {
//     "sub":"hindi",
//     "id": 5,
//     "courseCode":10
//   },
//     {
//     "sub":"japanese",
//     "id": 4,
//     "courseCode":12
//   },
//  ]

//  myarr4.forEach( (value,idx,arr)=>
//   {
//   // here value ----> a whole object .... we can access the insights using value.something example
//   if(value.hasOwnProperty("sub"))console.log(value.sub);
//   /// hasOwnProperty ----> help to check whether given object consist a specified key or not
//  }
//  )

//  let newsubArray = myarr4.forEach((value,idx,arr)=>{
//   return value.sub;
//  })

//  console.log(newsubArray); ///!!!! finds to be empty because forEach does not returns anything

 //// for returning purpose we have .filter /////////

/////// +++++++.filter+++++++++++++++++++++////////////
    /// filter expects single condition 
    /// as name suggest it is only used to filter the values ...we can obtain certain values
    //  that obeys certain conditon ...values cant get modify
    //  if we want to modify then use .map

let myarr6 = [1,2,3,4,5,6,22,113,52,24,111]

// let result = myarr6.filter((num)=>num%2==0)
// console.log(result);


// !!!!!!!!! .map !!!!!!!!!!!!!!

// let result2 = myarr6.map((num)=>{
//   if(num%2 === 0)return num;
//   else return num*=-1;
// })

//console.log(result2);



/////!!!!!++++Chaining 0f map,filter etc ------>top=>down chaining happens+++++!!!!!!!!///
//chaining means multiple maps ,filter together to generate desired output

let myarr7 = [1,3,5,8,3,2,622,6324,62,13,57,75];

let result4 = myarr7
              .map((num)=>{ if(num%2===0)return  num/=2;
                else return num*=-1;
              }) // even num get devide by 2 odd get mul by -1;

               .map((num1)=>{if(num1>10)return num1;
                else return 0;
               })
               
              .filter((num2)=>{return num2>25})

console.log(result4);