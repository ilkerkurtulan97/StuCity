const express = require('express');
const app = express()





//Routing
app.get('/', (req, res)=>{
    res.send('App started');
});

//Launching the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started at ${port} ...`);
});