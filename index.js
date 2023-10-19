const express = require('express')
const app = express()
const cors = require('cors')
const data = require('./sample.json')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))


const chapters = data.chapters

// app.get('*', (req, res) => {
//   res.send('<div>What the helll?</div>')
// })

app.get('/', (request, response) => {
  response.send('<h1>Hello Backend</h1>')
})

app.get('/api/chapters', (request, response) => {
  response.send(chapters)
})

app.get('/api/chapters/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log('Backend ID:', id)

    if (id >= chapters.length || id < 0) {
        console.log('This is undefined')
      return response.status(400).json({error: 'Entry error'})
    }

    const ch = chapters.find(c => c.id === id)

    console.log(response.get('Content-Type'))
    console.log('chapter title:', ch.title)

    return response.json(ch)
})

// app.post('/api/chapters', (req, res) => {
//   const newChap = req.body

//   newChap.id = chapters.length
//   chapters = chapters.concat(newChap)

//   res.json(newChap)
// })



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})