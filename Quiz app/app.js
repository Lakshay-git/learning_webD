const question = [{
    'que': "Which of the following is a markup language?",

    'a': 'HTML ',
    'b': 'javascript',
    'c': 'CSS',
    'd': 'PHP',
    'Correct': 'a'
},
{
    'que': " Which country has won the most World Cups? ",

    'a': 'india ',
    'b': 'brazil',
    'c': 'australia',
    'd': 'indonesia',
    'Correct': 'b'
},
{
    'que': "How many bones do we have in an ear?",

    'a': '1 ',
    'b': '9',
    'c': '8',
    'd': '3',
    'Correct': 'd'
}]

let index = 0;
let total = question.length;
let right = 0;
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')

const loadQuestion = () => {
    if (index === total){
        return endQuiz()
    }
    
    reset();
    const data = question[index]
    
    console.log(data)
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}


const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    console.log(ans, data.Correct)
    if (ans === data.Correct) {
        right++;
    } else {
        wrong++;
    }
    index++
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank you for playing the Quiz  </h3>
    <h2>${right} / ${total} are correct  </h2>
    </div>
    `

    
    
}

//initial call 
loadQuestion()