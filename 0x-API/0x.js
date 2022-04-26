const apiData = {
    url: 'https://api.0x.org/swap/v1/quote?',
    buyToken: 'DAI',
    sellToken: 'WETH',
    sellAmount: '100000000000000000',
}

const {url, buyToken, sellToken, sellAmount} = apiData

const fullQuery = `${url}buyToken=${buyToken}&sellToken=${sellToken}&sellAmount=${sellAmount}`

fetch(fullQuery)
    .then((data) =>{
        if(data.ok){
            return data.json()
        } else{
            throw new Error('data is not okay')
        }
    })
    .then(swap => generateHTML(swap))
    .catch(error => console.error('error',error))
    const generateHTML = (data) => {
        console.log(data)
        const html = `
        <div class="Price">${data.price}</div>
        <div class="Estimated Gas">${data.estimatedGas}</div>
        <div class="DEX Name">${data.sources[0].name}</div>
        `
        const showOnHTML = document.querySelector('.swap')
        showOnHTML.innerHTML = html
    }