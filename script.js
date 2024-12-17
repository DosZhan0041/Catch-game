let again = document.getElementById('again')
let question = document.getElementById('question')
let input = Number(document.getElementById('inputValue').value)
let score = document.getElementById('score')
let record = document.getElementById('record')
let status = document.getElementById('status')
let text = document.getElementById('text')
let statusInput = document.getElementById('statusInput')
let scoreNumber = 5;
score.innerText = scoreNumber;

document.getElementById('CatchButton').addEventListener('click', checkNumber)
let random = Math.round(Math.random()*20)
console.log(random);


function checkNumber(){
    let input = document.getElementById('inputValue').value
    if(random == input){
        question.innerText = random;
        document.getElementById('cont').style.backgroundColor='purple'
        status.innerText = 'Угадал!'
        text.innerText = 'Поздравляем!'
        scoreNumber--;
        score.innerText = scoreNumber;
        record.innerText = scoreNumber
    }
    else if(input<0  || input == null || input>20){
        statusInput.innerText = 'Число должно быть не меньше нуля или больше 20!';
        scoreNumber--;
        score.innerText = scoreNumber;
    }
    else{
        if(random>input){
            statusInput.innerText = 'меньше!';
            scoreNumber--;
            score.innerText = scoreNumber;
        }
        else{
            statusInput.innerText ='больше!';
            scoreNumber--;
            score.innerText = scoreNumber;
        }
    }
}

again.addEventListener('click', againfunction)
function againfunction(){
    let scoreNumber = 5;
    score.innerText = scoreNumber;  
    status.innerText = 'Start catching...'
    document.getElementById('cont').style.backgroundColor='tomato'
    question.innerText='?'
}
