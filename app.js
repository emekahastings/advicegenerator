let dice= document.getElementById('dice')
let advice= document.getElementById('advice')
let words= document.getElementById('words')
let number= document.getElementById('number')
console.log(number)
function getadvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(function(res){
        return(res.json())
    })
    .then (function(data){
       number.innerHTML=`Advice#${data.slip.id}`
       words.innerHTML= `${data.slip.advice}`
    })
   
}

dice.addEventListener('click', getadvice)
