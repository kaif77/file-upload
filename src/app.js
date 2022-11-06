const express = require("express");
const app = express();
const cors = require("cors");
const port = 3300;

const uploadRoute = require("./routes/FileRoutes");

app.use(cors());

// user_id, user_order_id
// images, csv, pdf, xml, cls, xlxs, docx, doc
app.use("/file", uploadRoute);

app.get("/", (req, res) => {
  res.send("Simple Multer Fproject");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
