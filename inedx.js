const express = require('express');
const app = express();
const cors = require('cors');
const port = 3300;

app.use(cors());

app.get('/', (req, res) => {
res.send('Simple Project');
});

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
});