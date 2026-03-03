const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

// Importo router
const postsRouter = require("./routers/posts");

// Registro il router con prefisso /posts
app.use("/posts", postsRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server di Gabriela on http://localhost:${port}`);
});
