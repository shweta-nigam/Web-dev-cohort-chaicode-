let userActivity = [
    {user: "Alice", activityCount : 45},
    {user: "lucy", activityCount : 55},
    {user: "Iia", activityCount : 95},
]
// find most active user // only using reduce method
let mostActiveUser = userActivity.reduce((maxUser, user)=>  
    user.activityCount > maxUser.activityCount ? user : maxUser )
console.log(mostActiveUser)