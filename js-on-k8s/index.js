// 👇🏻 Initialize express.
const express = require("express");
const app = express();

const port = 3000;

// 👇🏻 Return a sample JSON object with a message property on the root path.
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Odigos!",
  });
});

// 👇🏻 Listen on port 3000.
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
