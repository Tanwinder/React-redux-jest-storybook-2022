const express = require('express');
const path = require('path');

  const app = express();

  const port = process.env.PORT || 8080;
// const PUBLIC_DIRECTORY = path.join(__dirname, './public');

app.use(express.static(PUBLIC_DIRECTORY));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port: ${port}`);
});