const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/static-data", (req, res) => {
  res.json({
    msg: "Hello world!",
  });
});

app.get("/fetch-data", (req, res) => {
  // Simulate a real-world database call
  setTimeout(() => {
    res.json({
      msg: "Hello world!",
    });
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`The server is listening on port: ${PORT}`);
});
