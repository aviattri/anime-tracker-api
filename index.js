const express = require('express')

let shows = [
  {
    id: "1",
    title: "Mushoku Tensei: S3 Cour II",
    format: "TV",
    season: "SPRING",
    seasonYear: 2027,
    releaseStatus: 'NOT_YET_RELEASED',
  },
  {
    id: "2",
    title: "Demon Slayer: Infity Castle Part II",
    format: "MOVIE",
    season: "FALL",
    seasonYear: 2027,
    releaseStatus: 'NOT_YET_RELEASED',
  },
  {
    id: "3",
    title: "The Apothecary Diaries: S3 Cour II",
    format: "TV",
    season: "WINTER",
    seasonYear: 2027,
    releaseStatus: 'NOT_YET_RELEASED',
  },
  {
    id: "4",
    title: "Rascal Does not Dream of Dear Friend",
    format: "MOVIE",
    season: "WINTER",
    seasonYear: 2027,
    releaseStatus: 'NOT_YET_RELEASED',
  },
  {
    id: "5",
    title: "Grand Blue Dreaming: S4",
    format: "TV",
    season: "FALL",
    seasonYear: 2027,
    releaseStatus: 'NOT_YET_RELEASED',
    important: true
  },
  {
    id: "6",
    title: "Sakamoto Days: S2",
    format: "TV",
    season: "FALL",
    seasonYear: 2027,
    releaseStatus: 'NOT_YET_RELEASED',
  },
   {
    id: "7",
    title: "Dandadan: S3",
    format: "TV",
    season: "FALL",
    seasonYear: 2027,
    releaseStatus: 'NOT_YET_RELEASED',
  },
]
 
let app = express()

app.get('/', (request,response)=>{
    response.send('<h1>Hey testing!</h1>')
})

app.get('/api/shows/', (request,response)=>{
    response.json(shows)
})

//route for fetiching a single show
app.get('/api/shows/:id',(request, response)=>{
    const id = request.params.id 
    const show = shows.find(show=> show?.id === id)

    if(show){
         response.json(show)
    }else{
        response.status(404).end()
    }
})

const PORT = 3001

app.listen(PORT,()=>{
    console.log(`listening at Port ${PORT}`)
})
