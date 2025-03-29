function showTimeDate(){
    const timeElement = document.getElementById("time")
    const dateElement = document.getElementById("date")

    // get time
    const timeNow = new Date()
    let hours = timeNow.getHours().toString().padStart(2,"0")
    let min = timeNow.getMinutes().toString().padStart(2,"0")
    const sec = timeNow.getSeconds().toString().padStart(2,"0")

    timeElement.innerText = `${hours}:${min}:${sec}`

    // get date
    const date = timeNow.getDate()
    console.log(date)
}

showTimeDate()

//update time and date
setInterval(showTimeDate, 1000)