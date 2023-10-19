const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

let chapters = [
  {
    "id": 0,
    "title": "backend 第25章",
    "content": "第 25 章<br><br>“轰”——<br><br>惊雷落下，猛然将夏清清从夢魇中震醒。<br>"

  },
  {
    "id": 1,
    "title": "backend 第26章",
    "content": "第 26 章 <br>"

  },

]


app.get('/', (request, response) => {
    response.send('<h1>Hello Backend</h1>')
})

app.get('/api/chapters', (request, response) => {
  // response.send('<h1>Hello Backend</h1>')
  response.send(chapters)
})

app.get('/api/chapters/:id', (request, response) => {
    const id = Number(request.params.id)
    const ch = chapters.find(c => c.id === id)
    response.json(ch)

    console.log(response.get('Content-Type'))
    console.log(ch)
})

app.post('/api/chapters', (req, res) => {
  const newChap = req.body

  newChap.id = chapters.length
  chapters = chapters.concat(newChap)

  res.json(newChap)
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})