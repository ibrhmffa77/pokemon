let row=document.querySelector('.row')
let srcbtn=document.querySelector('.srcbtn')
let input=document.querySelector('.cus-input')
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
   
         srcbtn.addEventListener('click',()=>{
          console.log("hello");
    fetch(`https://pokeapi.co/api/v2/pokemon/`+ input.value)
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


