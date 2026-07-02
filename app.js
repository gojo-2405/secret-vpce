const express = require("express");
const getSecret = require("./secret");

const app = express();

const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const secret = await getSecret();

    res.json({
      message: "Secret retrieved successfully",
      secret: secret
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
