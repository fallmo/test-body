import express from "express";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(JSON.stringify(req.body));
  res.send("hello world");
});

app.listen(8080);
console.log(`app running on port 8080`);
