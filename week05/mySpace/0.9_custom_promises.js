/*Note 
Before anything lets clear my confusion between the 'Promise' keyword ;
Default JavaScript Promise vs. Custom Promise


1️⃣ Default JavaScript Promise (e.g., fetch() API uses Promises)
JavaScript already provides Promises in functions like fetch(), which handles HTTP requests:
*/

fetch("https://api.example.com/data")
.then((response)=>response.json())
.then(data => console.log(data))
.catch(err => console.error(err))
//Here, we are NOT creating a custom Promise. We're just using an existing one.



// 2️⃣ Custom Promise (We Define the Logic)
// A custom Promise is when we manually create a new Promise for our own task:

function myCustomPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;     // see what happens if = false
             if(success){
                resolve("task completed successfully!")
             } else {
                reject("Task failed!")
             }
        }, 3000)
    })
}

myCustomPromise()
.then(message => console.log(message))
.catch(error => console.error(error))
// Here, we control what happens inside the Promise and when it resolves or rejects.

