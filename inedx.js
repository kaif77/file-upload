const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: '/tmp/multer/'});
const port = 3300;

app.use(cors());

app.post("/upload", upload.single("files"), (req, res) => {
   try {
      res.send(req.file);
   } catch (error) {
        res.status(400).send("Something went wrong!");
   }
 });

 app.post("/images", upload.array("demo_images", 4), (req, res) =>{
    try {
      res.send(req.files);
    } catch (error) {
      console.log(error);
      res.send(400);
    }
  });

// app.post('/upload', upload.single('file'), function (req, res, next) {
//     res.send(req.file);
// });

app.get('/', (req, res) => {
res.send('Simple Project');
});

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
});