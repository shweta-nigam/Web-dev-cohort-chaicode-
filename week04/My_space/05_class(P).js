// Microtask queue:
// - Promise callbacks (.then, .catch, .finally)

// Macrotask queue:
// - setTimeout, setInterval
// - setImmediate 
// - I/O callbacks (like file handling in Node.js)


// async/await works by transforming the code into a series of Promises behind the scene




/*
fecthUser("Arjun")
	.then((user) => fetchUserPhotos(user.username))
	.then((userPhotos) => console.log(`Your photes are ${userPhotos}`));
*/

const displayUserData = async () => {
    const user = await fecthUser(`Govind`);
    const photos = await fetchUserPhotos(user.username);
    console.log(`${user.username} Your photos are: ${photos}`);
  };
  
  displayUserData();
  