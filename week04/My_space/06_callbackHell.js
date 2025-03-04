//  Callback hell in shweta's style : -

// Suppose you want to make a picture of cherry blossom and to do so you need  things in order

getCanvas(function (){
    getPaints( function (){
        makeSketch( function(){
            draw(function(){
                paintSketch(function(){
                    addShadows(function(){
                        outlineTree(function(){
                            letThePaintDry(function(){
                                console.log(`Your beautiful picture of Cherry Blossom tree is ready !`)
                            })
                        })
                    })
                })
            })
        })
    })
})

// Here the process and code looks cute but when you work with scary order of things and triangle in your code appear that's where your code fall down in callback hell.
// Calling function one after another and reducing code readability and making callback hell.
// Thats where promises comes for help and saves the day!   ... I mean code.

getCanvas()
.then(getPaints)
.then(makeSketch)
.then(draw)
.then(paintSketch)
.then(addShadows)
.then(outLineTree)
.then(letThePaintDry)
.then(()=> console.log(`Picture of Cherry blossom is ready! `))
.catch((error)=> console.log(`Couldn't paint the tree! :` + error ))

/* Note
Callback Hell = Too many nested callbacks (messy code).
Promises = Chain of .then() (clean and easy to read).
*/