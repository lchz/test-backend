const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('dist'))



app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/chapters/:id', (request, response) => {
    const id = Number(request.params.id)
    const ch = chapters.find(c => c.id === id)
    response.json(ch)
    console.log(response.get('Content-Type'))
    console.log(ch)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})