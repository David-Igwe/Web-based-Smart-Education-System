const { topics } = course;
const topicButtons = document.querySelectorAll('.topic-button');
const topicBody = {
    img: document.querySelector('.topic-img'),
    topicName: document.querySelector('.topic-name'),
    topicLink: document.querySelector('.topic-link')
}
const topicCard = document.querySelector('#topic-card')
const quiz = {
    quizButton: document.querySelector('.quiz-button'),
    quizBody: document.querySelector('#quiz-body'),
    quizName: document.querySelector('#quiz-name'),
    question: document.querySelector('#question'),
}
const form = document.querySelector('#form');
const checkButton = document.querySelector('#check');
const nextQuestion = document.querySelector('#nextQuestion');
const correctFlash = document.querySelector('#correct');
const incorrectFlash = document.querySelector('#incorrect');
const incorrectMsg = document.querySelector('#incorrectMsg');
const submitButton = document.querySelector('#submit');
const nextTopic = document.querySelector('.next-topic');
const scoreBody = document.querySelector('#score-body');
const score = document.querySelector('#score');
let topicId = course.topics[0]._id;
let topicScore = 0;

const findTopicIndex = () => {
    for (let i = 0; i < course.topics.length; i++) {
        if(course.topics[i]._id === topicId){
            return i;
        }
    }
}





function changeTopic(button, body){
    if(window.getComputedStyle(topicCard).display === 'none'){
        topicCard.style.display = 'flex'
        quiz.quizBody.classList.add('d-none');
        scoreBody.classList.add('d-none');
        nextTopic.classList.add('d-none');
    };
    const id = button.getAttribute('id');
    const index= parseInt(button.getAttribute('index'));
    form.reset();
    body.img.setAttribute('src', topics[index].img);
    body.topicName.textContent = topics[index].topicName;
    body.topicLink.setAttribute('href', topics[index].url);
    quiz.quizButton.setAttribute('id', id);
    checkButton.setAttribute('index', '0');
    nextQuestion.setAttribute('index', '1');
    nextTopic.setAttribute('index', index + 1);
    if(topics[index + 1]){
        nextTopic.setAttribute('id', topics[index + 1]._id);
    }
    topicId = id;
    topicScore = 0;
};

function showQuiz(){
    correctFlash.classList.add('d-none');
    incorrectFlash.classList.add('d-none');
    submitButton.classList.add('d-none');
    nextTopic.classList.add('d-none');
    scoreBody.classList.add('d-none');
    checkButton.disabled = false;
    topicCard.style.display = 'none';
    quiz.quizBody.classList.remove('d-none');
    const i = findTopicIndex();
    quiz.quizName.textContent = course.topics[i].topicName;
    quiz.question.textContent = `1. ${course.topics[i].questions[0].question}`;
    for(let j = 0; j < course.topics[i].questions[0].options.length; j++){
    document.querySelector(`#option-${j+1}`).setAttribute('value', `${course.topics[i].questions[0].options[j].text}`);
    document.querySelector(`#option-${j+1}-label`).textContent = course.topics[i].questions[0].options[j].text;
    } 
}

function checkAnswer(button){
    const qIndex = parseInt(button.getAttribute('index'));
    const i = findTopicIndex();
    const questions = course.topics[i].questions
    let correctAnswer = '';
    const options = questions[qIndex].options
    for(let j = 0; j < options.length; j++){
        if(options[j].isAnswer === true){
            correctAnswer = options[j].text;
        }
    }

    if(form.elements.question.value === correctAnswer){
        correctFlash.classList.remove('d-none');
        topicScore++
    } else{
        incorrectFlash.classList.remove('d-none');
        incorrectMsg.textContent = `The correct answer is ${correctAnswer}`;
    };
    button.disabled = true;

    if(!(qIndex + 1 === questions.length)){
        nextQuestion.classList.remove('d-none');
    } else{
        submitButton.classList.remove('d-none');
    };
    
};

function showNextQuestion(button){
    form.reset();
    checkButton.disabled = false;
    nextQuestion.classList.add('d-none');
    const qIndex = parseInt(button.getAttribute('index'));
    const i = findTopicIndex();
    const questions = course.topics[i].questions
    correctFlash.classList.add('d-none');
    incorrectFlash.classList.add('d-none');
    quiz.question.textContent = `${qIndex + 1}. ${questions[qIndex].question}`;
    for(let j = 0; j < questions[qIndex].options.length; j++){
        document.querySelector(`#option-${j+1}`).setAttribute('value', `${questions[qIndex].options[j].text}`);
        document.querySelector(`#option-${j+1}-label`).textContent = questions[qIndex].options[j].text;
    } 
    checkButton.setAttribute('index', `${qIndex}`);
    button.setAttribute('index', `${qIndex + 1}`);
};

async function submitScore(){
    quiz.quizBody.classList.add('d-none');
    try {
        const res = await axios.post(`/courses/${course._id}/${topicId}/${topicScore}`);
    } catch (err) {
        console.log(err)
    }
    const topicLength = parseInt(nextTopic.getAttribute('length'));
    const topicIndex  = parseInt(nextTopic.getAttribute('index'));
    if(!(topicIndex === topicLength)){
        nextTopic.classList.remove('d-none');
    };
    scoreBody.classList.remove('d-none');
    score.textContent = `${topicScore}/5`;
};





for (let i = 0; i < topicButtons.length; i++){
    topicButtons[i].addEventListener('click', function() {
        changeTopic(topicButtons[i], topicBody);
    });
}

quiz.quizButton.addEventListener('click', function(){
    showQuiz();
});

checkButton.addEventListener('click', function(){
    checkAnswer(checkButton);
});

nextQuestion.addEventListener('click', function(){
    showNextQuestion(nextQuestion);
});

submitButton.addEventListener('click', function(){
    submitScore();
});

nextTopic.addEventListener('click', function(){
    changeTopic(nextTopic, topicBody);
});




