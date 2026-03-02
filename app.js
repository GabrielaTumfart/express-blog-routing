const express = require("express");

const app = express();

app.use(express.json());

// Importo router
const postsRouter = require("./routers/posts");

const port = 3000;

app.listen(port, () => {
  console.log(`Server di Gabriela on http://localhost:${port}`);
});
