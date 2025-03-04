/*Note:-  Lexical scope in JS
🎭 Act 1: The Rule of Lexical Scope
Lexical scope means “where a variable is written in the code determines where it can be accessed.”

Inner functions can access variables from outer functions.
Outer functions CANNOT access variables from inner functions.

"Lexical" refers to where the function is physically written in the code. JavaScript remembers where a function was created, and it follows that hierarchy when looking for variables.

Lexical means "by location in the code". The scope of a function is determined by where it's written, NOT where it's called.
*/

function publicLibrary(){
   let books = "Books for everyone!"

   function privateLibrary(){
    let privateBooks = "Books for few!"

    function personalLibrary(){
        let myBooks = "books only for me!"
        
        // can access all the books
        console.log( "I have access to: " + books)
        console.log( "I have access to: " + privateBooks)
        console.log( "I have access to: " + myBooks)
    }

     // private library can not access personalLibrary but it can access it's own and public library
     console.log( "I have access to: " + books)
     console.log( "I have access to: " + privateBooks)

     personalLibrary()
   }

   // public library has only access to its own books
      console.log( "I have only access to: " + books)

      privateLibrary()
}
publicLibrary()



// another ex:-

let fName = "Shweta"

function fullName(){
    let lName = "Nigam"
    function innerFn(){
        console.log(fName + " " + lName)
    }
    innerFn()
}
fullName()


//+++++++++
let f_Name = "Shweta"

function fullName(){
    let lName = "Nigam"
    return function(){
        console.log(f_Name + " " + lName)
    }
}
fullName()()       //   calling the returned function


// ++++++++++++   

let userName = "Alice"

function userDetail(){
    let userName = "John"
    let lastName = "Bright"

    return function(){
        return `User name is: ${userName} ${lastName}`       // username will be John because of the Function Execution context , it is also the reason we can declare the username inside function also, but still access the userName of Global Execution context in the absence of the userName inside function.
    }
}
console.log(userDetail()())
// userDetail()()            here this wont work

