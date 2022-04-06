const apiData= {
    url: 'https://anime-facts-rest-api.herokuapp.com/api/v1/',
    anime_name: 'fma_brotherhood',
    fact_id: '2',
}

const {url, anime_name, fact_id} = apiData

const fullAPI = `${url}${anime_name}/${fact_id}`

fetch(fullAPI)
    .then((data) => {
        if(data.ok){
            return data.json()
        } else{
            throw new Error('NO');
        }
    })
    .then (anime => generateHTML(anime))
    .catch (error => console.error('Error', error))

    const generateHTML = (data) =>{
        console.log(data)
        const html = `
            <div class="Anime d">${anime_name}</div>
            <img src= ${data.anime_img}>
            <div class="Anime e">${data.data.fact_id}</div>
            <div class="Anime Name">${data.data.fact}</div>
        `

        const animereplace = document.querySelector('.anime')
        animereplace.innerHTML = html
    }

