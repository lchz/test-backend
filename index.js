const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('dist'))

    

// let chapters = [
//     {
//       id: 1,
//       content: "第 1 章<br><br>夏清清沒有想到，自己身處的世界原來是一本小說。<br><br>他在自己的十九歲生日宴上，被剛找回來的私生子哥哥夏缺推進池塘裏。<br><br>",
//       important: true
//     },
//     {
//       id: 2,
//       content: "第 2 章<br><br>夏",
//       important: false
//     },
//   ]



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