const question = [{
    'que': "Which of the following is a markup language?",

    'a': 'HTML ',
    'b': 'javascript',
    'c': 'CSS',
    'd': 'PHP',
    'Correct': 'a'
},
{
    'que': " What country has won the most World Cups? ",

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
const optionInputs = document.querySelectorAll('.options')
const quesBox = document.getElementById("quesBox")
const loadQuestion = () => {
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
    const data = question[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++
    loadQuestion();
    return;
}

const getAnswer = () => {
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                return input.value;
            }
        }
    )

}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


//initial call 
loadQuestion()