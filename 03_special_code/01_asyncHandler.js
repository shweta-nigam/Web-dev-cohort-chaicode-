function asyncHandler(requestHandler){
    return function(req,res,next){
        Promise.resolve(requestHandler(req,res,next))
        .catch(function(err){
            next(err)
        })
    }
}

export {asyncHandler}

/*Note
Here asyncHandler function taking another function as an argument  -- what I got it
It is higher order function 

This asyncHandler function is a higher-order function used in Node.js with Express to handle asynchronous errors automatically.

What’s happening here?

asyncHandler is a function that takes another function (requestHandler) as an argument.
It returns a new function that Express will use as a middleware.
The returned function:
Calls requestHandler(req, res, next), which is an async function.
Wraps it inside Promise.resolve(), ensuring that any rejected promise (error) gets caught.
If an error occurs, it is passed to next(err), allowing Express’s built-in error-handling middleware to catch it.

2. Why Do We Need This?
In Express.js, when you use async functions in routes, any error inside the function won’t automatically be caught by Express.

Example Without asyncHandler (Error Not Handled)

app.get("/data", async (req, res) => {
    let result = await someAsyncFunction(); // If this throws an error, Express won't catch it
    res.json(result);
});
If someAsyncFunction() throws an error, Express won't handle it, and the server may crash.

Example With asyncHandler (Error is Handled)

app.get("/data", asyncHandler(async (req, res) => {
    let result = await someAsyncFunction();
    res.json(result);
}));
Here, asyncHandler ensures that if someAsyncFunction() fails, the error is passed to next(err), so Express can handle it gracefully.

3. Advantages of asyncHandler
✅ Prevents Server Crashes
Without asyncHandler, unhandled promise rejections could crash the server.
✅ Cleaner Code
You don’t need to wrap every route handler in try...catch.
✅ Automatic Error Forwarding
Errors are automatically passed to Express’s error-handling middleware.
✅ Reusable
You can wrap any async function with asyncHandler without modifying its code.


The asyncHandler function is a utility for Express.js to handle errors in asynchronous route handlers. It simplifies code, improves error handling, and prevents server crashes caused by unhandled promise rejections.

*/