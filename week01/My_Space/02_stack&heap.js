// Stack and heap 
/* Note:-
 stack ( fast , fixed sized memory) :- 
 --> store primitive data types such as string and numbers.
 --> memory is static and fixed.
 --> accessing and retrieval are fast

 ex:-

 let num1 = 10
 let num2 = num1
 num2 = 50
 console.log(num1)       // 10
 console.log(num2)       // 50


 Heap (flexible, large , slow);-
 --> store  complex (non-primitive) data types such as array & objects.
 --> memory is flexible but slow.
 --> Memory allocation is dynamic and can grow as needed.
 --> Access is slower than the stack.
 
 ex:- 

 const obj1 = {name: "shweta", age: 22, address : "delhi"}
 const obj2 = obj1
 obj2.address = "new york"
 console.log(obj2.address )         // new york
 console.log(obj1.address )         // new york
 
conclusion : - In stack example the values did not change because primitive data is stored in stack where memory is static and fixed.
whereas in heap ex values changed because that data is stored in heap where memory is flexible and dynamic.

 
*/