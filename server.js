const express = require('express');
const morgan = require('morgan');

const PORT = 8000;

app = express();

app.use(morgan('combined'))


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});