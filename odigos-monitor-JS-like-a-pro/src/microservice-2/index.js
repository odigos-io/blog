const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/api/data", async (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Microservice 2 listening on port ${PORT}`);
});
