const express = require("express");
const history = express.Router();

const Entry = require("../models/entries.js");
const History = require("../models/history.js");

history.post("/", (req, res) => {
  History.create(req.body).then((createdHistory) => {
    res.status(200).json(createdHistory);
  });
});

history.post("/copy", async (req, res) => {
  try {
    const copiedData = await Entry.aggregate([
      {
        $out: History.collection.name,
      },
    ]);
    res.status(200).json({ message: "Data duplication complete." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while duplicating data." });
  }
});

history.delete("/", (req, res) => {
  History.deleteMany({}).then(() => {
    res.status(200).json({ message: "All data deleted." });
  });
});

module.exports = history;
