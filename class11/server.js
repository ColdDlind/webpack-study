const express = require("express");
 
const app = new express();

app.get("/user", (req, res) => {
  res.json({
    code: 0,
    msg: "success"
  });
});

app.listen(3000);
