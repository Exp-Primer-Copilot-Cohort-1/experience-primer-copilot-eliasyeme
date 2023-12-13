// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Create routes
// 4. Start the server

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a router
const router = require('./routes');

// 3. Create routes
app.get('/', router.home);
app.get('/comments', router.comments);
app.get('/comments/:commentId', router.comment);

// 4. Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});