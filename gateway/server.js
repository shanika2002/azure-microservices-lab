const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gateway service is running successfully!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/items", (req, res) => {
  res.json([
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});