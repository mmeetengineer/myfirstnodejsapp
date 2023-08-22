const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This Is My FIrst Node JS APP DEMO!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})