import express from "express"
const app = express()    // creates an express application instance // app is an object that represent our web server.
const port = 3000       // defines the port where our express app will listen

console.log("start")      // This runs synchronously because it's a normal console.log().

app.get('/', (req, res) => {           // Defines a route (GET /) that :-
  res.send('Hello World!')              // Sends "Hello World!" when accessed.
  console.log("middle")                 //Logs "middle" only when someone visits localhost:3000/. 
})                                  

//Why does "middle" not run immediately?
// Because this callback function is executed later, only when a request comes in.


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log("end ")                    //Logs "end" immediately after console.log("start").
// It runs before the server starts listening because app.listen() is asynchronous and does not block further execution.

/*Note:-
Why Does "start" and "end" Execute First?
Execution Flow
The file is executed top to bottom.
"start" is logged.
Express sets up the GET / route (but does not execute it).
app.listen() starts the server asynchronously (non-blocking).
"end" is logged before app.listen() completes.
The server starts and logs "Example app listening on port 3000".
Only when a user visits http://localhost:3000/, "middle" is logged.


Where Does res.send() Come From?
res (short for response) is an object provided by Express.
When a request is made to an Express route, Express automatically provides req (request) and res (response) objects.
res.send() is a method of the response object.

//Example: Different Response Types

app.get("/text", (req,res)=>{
    res.send("This is the text response")                           // text response type
})

app.get("/json", (req,res)=>{
    res.json({myJsonMessage : "This is JSON response."})               // json response type
})


app.get("/html", (req,res)=>{
    res.send("<h1>This is an HTML response</h1>")                    // html response type
})


✅ res.send() is used to send a response from the server to the client.
✅ It comes from the Express response object (res), which is automatically passed into route handlers.
✅ It sets headers and ends the response automatically.
*/

