console.log('test')

let guessNumber = 0;

let originalNumber = randomInt(0,100);

let numberInput = document.querySelector('#number')
let checkBtn = document.querySelector('#check-btn')
let result = document.querySelector('#last-div')
let guessNumberHTML = document.querySelector('#guess-number');

//console.log(numberInput, checkBtn)
//console.log(result)
console.log(originalNumber)
console.log(guessNumberHTML)

//guessNumberHTML.style.color= "purple"; 
//guessNumberHTML.style.fontSize= "2rem"; 
//guessNumberHTML.style.textAlign= "center";

guessNumberHTML.classList.add("counter");


checkBtn.onclick=function(){

    let value = Number(numberInput.value);
    guessNumber = guessNumber + 1; 
    //guessNumberHTML.classList.remove("counter");
    guessNumberHTML.classList.replace("counter", "result");
    console.log(originalNumber,value);
    if(originalNumber > value){
        result.style.color= "red";
        result.innerHTML = "Daha büyük sayı giriniz...";
    } else if(originalNumber < value){
        result.style.color= "blue";
        result.innerHTML = "Daha küçük sayı giriniz...";
    }else{
        result.style.color= "green";
        result.innerHTML = "Doğru sayı girdiniz...";
    }

    let buton = document.createElement("h1")
    buton.innerHTML = "Tıkla"
    
    document.body.appendChild(buton);

    //guessNumber = guessNumber + value;
    //console.log('Butona tiklandi' , value , guessNumber)
    //result.innerHTML = "Result:" + guessNumber;
    //numberInput.value = 0;
    
}

function randomInt(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}