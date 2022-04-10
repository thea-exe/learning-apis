const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express() // express comes with use, get, listen
const cors = require('cors')
const url = 'https://leagueoflegends.fandom.com/wiki/List_of_champions'
const halfUrl = 'https://leagueoflegends.fandom.com/'

app.use(cors())
app.get('/',(req,res) => {
    axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.floatleft', html).each(function() {
            const title = $(this).find('a').attr('title')
            const url = $(this).find('a').attr('href')
            const img = $(this).find('img').attr('data-src')
            const fullURl = `${halfUrl}${url}`
            articles.push({
                title,
                fullURl,
                img,
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

})



app.listen(PORT, () => console.log("Server is running")) // () => tells app how to respond if it's working

