const row=document.querySelector('.row')
const srcbtn=document.querySelector('.srcbtn')
let. input=document.querySelector('.input')
for(let i=1; i<150; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res=>res.json())
    .then(data=>{
        row.innerHTML+=`
            <div class="col-4">
                <img src="${data?.sprites["front_default"]}" class="new3" alt="">
                  <h3> ${data.name} </h3>
                  <p>${data.base_experience}</p>
                </div>
`
})
}     
      let id=input.value
         srcbtn.addEventListener('click',()=>{
          
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res=>res.json())
    .then(data=>{console.log(data)
        row.innerHTML=`
            <div class="col-4">
                <img src="${data?.sprites["front_default"]}" class="new3" alt="">
                  <h3> ${data.name} </h3>
                  <p>${data.base_experience}</p>
                </div>
`
})
})



