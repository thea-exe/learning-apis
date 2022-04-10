const show = document.querySelector('#show')

fetch('file:///Users/theachhim/learning-apis/learning-apis/webscraper.html')
    .then(response => response.json())
    .then (data => {
        data.articles.forEach(element => {
            const eachItem = `<div><h3>` + element.title `</h3><p>` + element.fullURl + `</p></div>` 
            show.insertAdjacentHTML("beforeend", eachItem)
        })
    }) .catch(err => console.log(err))