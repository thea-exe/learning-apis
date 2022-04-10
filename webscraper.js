const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express() // express comes with use, get, listen
const url = 'https://leagueoflegends.fandom.com/wiki/List_of_champions'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.floatleft', html).each(function() {
            const title = $(this).find('a').attr('title')
            const url = $(this).find('a').attr('href')
            const img = $(this).find('img').attr('src')
            articles.push({
                title,
                url,
                img
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))


app.listen(PORT, () => console.log("Server is running")) // () => tells app how to respond if it's working

