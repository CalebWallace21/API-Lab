const residentBtn = document.querySelector(`#resident-button`)
const baseURL = `https://swapi.dev/api`

function buttonTest (){
    axios.get(`${baseURL}/planets/2/`)
    .then (res => {
       for(let i = 0; i < res.data.residents.length; i++){
        axios.get(res.data.residents[i])
        .then (res => {
            let name = document.createElement(`h2`)
            let body = document.body
            name.innerHTML = res.data.name
            body.appendChild(name)
            // console.log(name)
        })
       }
    // console.log(res.data.residents)
})
    
    // console.log(`button clicked`)
}

residentBtn.addEventListener(`click`, buttonTest)