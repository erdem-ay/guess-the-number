console.log('test')

let guessNumber = 0;

let numberInput = document.querySelector('#number')
let checkBtn = document.querySelector('#check-btn')
let result = document.querySelector('#last-div')

//console.log(numberInput, checkBtn)
console.log(result)

checkBtn.onclick=function(){
    let value = Number(numberInput.value);
    guessNumber = guessNumber + value;
    console.log('Butona tiklandi' , value , guessNumber)
    result.innerHTML = "Result:" + guessNumber;
    numberInput.value = 0;
    
}