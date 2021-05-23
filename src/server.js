const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 5000;

let date = new Date();

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/uploads')
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    console.log(file)
    cb(null, file.originalname)

      // file.fieldname + '-' + date.getDate() + '0' + (date.getMonth() + 1) + date.getFullYear() + '.' +extension)
  }
})
const upload = multer({ storage: storage })

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (req.file) {
      res.send({
        status: true,
        message: "File Uploaded!",
      });
    } else {
      res.status(400).send({
        status: false,
        data: "File Not Found :(",
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/upload", )

app.listen(PORT, () => console.log(`server is running on ${PORT}..`))