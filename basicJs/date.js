// learning about dates in js

let today = new Date(); // return a date in GMT+ format

let localdate = today.toDateString(); /// returns a date  in string format ex. Tue Jun 16 2026
console.log(localdate) 

let day = today.getDate(); // returns day from 1 to 31  ...ex 16
console.log(day) // similarly getmonth,getyear,getday etc

console.log(today.toLocaleString()) ///ex 6/16/2026, 8:35:39 AM
console.log(today.toLocaleDateString()) // 6/16/2026