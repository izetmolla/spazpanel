const express = require('express')
const app = express()
const port = 2082

app.get('/', (req, res) => {
  res.send('Welcome To SpazFeed')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})