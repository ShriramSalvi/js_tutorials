
//+++++++++Element Selection+++++++++//

//!!!!!!!!document.getElementById('Id')!!!!!!!!!

const heading = document.getElementById("head1");

heading.innerHTML="hellow shriram";

const classElemnts= heading.className; // returns all classes in string format
                                       // only .class return undefined ...we must write .className
                                       // 
console.log(classElemnts);       /// this output will get dispyaed on browser console not on teminal

// document.setAttribute('attributeName','attributeValue')  // to set attribute to the element

heading.setAttribute('class','headings'); // this will set the class attribute to the element with value headings
                                        // it will override the previous class attribute value if it is already present

heading.setAttribute('class','heading1 heading2')// here we are setting multiple classes
                                                 //to the element by separating them with space


 // similarly we can set other attributes like id, style, etc. to the element using setAttribute method
 
// similarly for class
///!!!!!!!!document.getElementsByClassName('className')!!!!!!!!!

const classes= document.getElementsByClassName('heading2'); // this will return a HTMLCollection of all
                                                         // elements with class name 'heading2'

 // .innerHTML ------> gives access to inner content of the element with html tags
 // .innerText ------> gives access to inner content of the element without html tags but does not shows hidden texts
 //.innercontent-----> gives access to inner content of the element without html tags but shows hidden texts

 ///!!!!!!!!!document.querySelector('selector')!!!!!!!!!
 
const heading2 = document.querySelector('.heading2'); // this will return the first element with class name 'heading2'

const heading3 = document.querySelector('#head1'); // this will return the element with id 'head1'

const heading4 = document.querySelector('h1'); // this will return the first h1 element in the document

//////!!!!document.querySelectorAll('selector')!!!!!!!!!

const allHeadings = document.querySelectorAll('h1'); // this will return a NodeList of all h1 elements in the document
                                                     // nodelist is not array but very much similar to array we can traverse 
                                                     // it using forEach loop and also we can convert it to array using Array.from() method