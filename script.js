
let start = document.querySelector('.start');
let qC = document.querySelector('.question-container');
let question = document.querySelector('.question');
let container = document.querySelector('.container');
let btn = document.querySelectorAll('.btn');
let counter = 0;
let sound = document.querySelector('.sound');
let sound1 = document.querySelector('.sound-1');
let score = document.querySelector('.score')
let p6 =document.querySelector('.p6')

 


let answers = [
    {
        question: 'What is my name',
        answer: [
            {name:'AchiLes', correct:true},
            {name:'John', correct:false},
            {name:'Doe', correct:false},
            {name:'name', correct:false}
        ]
    },

    {
        question: 'What is your fav anime?',
        answer: [
            {name:'One piece', correct:false},
            {name:'Death note', correct:true},
            {name:'Code geass', correct:false},
            {name:'Moriarty', correct:false}
        ]
    },
    {
        question: 'What is my Pet',
        answer: [
            {name:'Cat', correct:false},
            {name:'Dog', correct:false},
            {name:'Rat', correct:false},
            {name:'None', correct:true}
        ]
    },
    {
        question: 'What is my Age',
        answer: [
            {name:'19', correct:false},
            {name:'20', correct:false},
            {name:'-88888888', correct:true},
            {name:'100', correct:false}
        ]
    },
    {
        question: '',
        answer: [
            {name:'Video', correct:false},
            {name:'Slider', correct:false},
            {name:'all of the above', correct:true},
            {name:'I dont care', correct:false}
        ]
    },

]

    start.addEventListener('click',() => {
        start.style.display = 'none';
        qC.classList.remove('hide');
        question.classList.remove('hide');
        container.style.transform = 'scale(1.5)'
        container.style.transition = 'all .5s ease-in'

        
        setQuestion();
        setAnswer();
        
    })


    function setQuestion(){
        
        question.innerText = answers[counter].question;
        
        for(let i = 0; i < answers[counter].answer.length;i++){
            btn[i].innerText = answers[counter].answer[i].name;

            btn[i].classList.remove('correct');
            btn[i].classList.remove('wrong');

            if(answers[counter].answer[i].correct){
                
                btn[i].classList.add('correct-identifier')

            }
            if(answers[counter].question === ''){
                
                p6.style.display = 'block'
               p6.play()
               
            }
            
        }
    }

    function setAnswer(){

        btn.forEach((btn) => {
            btn.addEventListener('click',() => {
                
                if(btn.classList[1] === 'correct-identifier'){
                    btn.classList.add('correct')
                    sound1.play()
                    let a = counter++;

                    score.innerText = 'Score:' + counter;    
                   
                   setTimeout( () => {setQuestion(a)},100);
                    btn.classList.remove('correct-identifier') 

                    if(answers.length === counter){
                        qC.classList.add('hide');
                        question.classList.add('hide')
                        p6.style.display = 'none'
                        p6.pause();
                       
                        let smile = document.querySelector('.smile');
                        smile.style.display = 'block';

                    }
                }
                else {
                    btn.classList.add('wrong')
                    score.innerText = 'INCORRECT! MORON';
                    
                    setTimeout( () => {setQuestion()},200);
                    sound.play();
                    
                }
                
             })
        })

    }
console.log(answers[counter].answer[counter].correct);
   
   