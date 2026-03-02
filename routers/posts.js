const express = require("express");
const posts = require("../data/posts");
const router = express.Router();

// Index - GET /posts/ - Lista di tutti i post
router.get("/", (req, res) => {
  const responseData = {
    result: posts,
    message: "Lista dei post",
    success: true,
  };
  res.json(responseData);
});

// Show - GET /posts/:id - Dettaglio di un singolo post
router.get("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    const responseData = {
      message: `Post ${postId} non trovato`,
      success: false,
    };
    return res.status(404).json(responseData);
  }
  const responseData = {
    result: post,
    message: `Dettaglio del post ${postId}`,
    success: true,
  };
  res.json(responseData);
});

// Store - POST /posts/ - Creazione di un nuovo post
router.post("/", (req, res) => {
  const responseData = {
    message: "Creazione di un post",
    success: true,
  };
  res.json(responseData);
});

// Update - PUT /posts/:id - Modifica intera di un post
router.put("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const responseData = {
    message: `Modifica del post ${postId}`,
    success: true,
  };
  res.json(responseData);
});

// Modify - PATCH /posts/:id - Modifica parziale di un post
router.patch("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const responseData = {
    message: `Modifica parziale del post ${postId}`,
    success: true,
  };
  res.json(responseData);
});

// Destroy - DELETE /posts/:id - Cancellazione di un post
router.delete("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const responseData = {
    message: `Cancellazione del post ${postId}`,
    success: true,
  };
  res.json(responseData);
});

module.exports = router;
