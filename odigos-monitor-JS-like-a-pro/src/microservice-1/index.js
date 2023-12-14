const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const response = await fetch("http://microservice2:8081/api/data");
    const data = await response.json();
    res.json({
      data: "Microservice 2 data received in Microservice 1",
      microservice2Data: data,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Microservice 1 listening on port ${PORT}`);
});
