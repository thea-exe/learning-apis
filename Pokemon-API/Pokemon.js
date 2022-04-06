const apiData= {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '1',
}

const {url, type, id} = apiData;

const fullAPI = `${url}${type}/${id}`

fetch(fullAPI)
    .then ((data) => {
        if(data.ok){
            return data.json()
        } throw new Error('it is not ok');
    })
    .then( pokemon => generateHTML(pokemon))
    .catch (error => console.error('error', error))

    const generateHTML = (data) => {
        console.log(data)
        const html = `
            <div class="Name">${data.name}</div>
            <img src=${data.sprites.front_default}>
            <div class="Height">${data.height}</div>
        `

        const transferPokemon = document.querySelector('.pokemon')
        transferPokemon.innerHTML = html
    }