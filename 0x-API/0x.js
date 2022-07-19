//Simple DAI Buy with WETH
const apiData = {
    url: 'https://api.0x.org/swap/v1/quote?',
    buyToken: 'DAI', // The ERC20 token address or symbol of the token you want to receive. Native token such as "ETH" can be provided as a valid buyToken. If the symbol given is not supported, try using token address instead. 
    sellToken: 'WETH', // The ERC20 token address or symbol of the token you want to send. Native token such as "ETH" can be provided as a valid sellToken. If the symbol given is not supported, try using token address instead. 
    sellAmount: '10000000', // The amount of sellToken (in sellToken base units) you want to send.
    //If sellAmount was specified in the request it provides the price of sellToken in buyToken.
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
        <div class="Price">Price: ${data.price}</div>
        <div class="Estimated Gas">Estimated Gas: ${data.estimatedGas}</div> 
        <div class="DEX Name">DEX Name: ${data.sources[0].name}</div>
        `
        const showOnHTML = document.querySelector('.swap')
        showOnHTML.innerHTML = html
    }