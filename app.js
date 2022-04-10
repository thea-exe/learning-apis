const show = document.querySelector('#show')

fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then (data => {
        data.forEach(champion => {
            const eachChamp =  `<h1>` + champion.title +`</h1>`
            show.insertAdjacentHTML("beforeend", eachChamp)
        })
    }) .catch(err => console.log(err))