(function(){
  function buildQuiz(){

    const output = [];


    myQuestions.forEach(
      (currentQuestion, questionNumber) => {


        const answers = [];


        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} correct van de ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Vraag 1: Wat voor software zorgt voor een virus vrije computer?",
      answers: {
        a: "Beeldbewerking software",
        b: "Anti-virus software",
        c: "Browser software"
      },
      correctAnswer: "b"
    },
    {
      question: "Vraag 2: Je beste vriend(in) vraagt om elkaars wachtwoord te wisselen, wat doe je?",
      answers: {
        a: "Je deelt je wachtwoord met je vriend(in).",
        b: "Je post je wachtwoord op je prikbord.",
        c: "Je houdt je wachtwoord geheim en vertelt je vriend(in) dat je dat nooit mag doen."
      },
      correctAnswer: "c"
    },
    {
      question: "Vraag 3: Je speelt een spelletje en opeens verschijnt er venster dat zegt dat je de 'gelukkige' winnaar bent, wat doe je?",
      answers: {
        a: "Je sluit het kader meteen.",
        b: "Je klikt op accepteer en gaat verder.",
        c: "Je negeert het kader en speelt het spelletje verder door."
      },
      correctAnswer: "a"
    },
    {
      question: "Vraag 4. Een virus is een…",
      answers: {
        a: "Spelletje op de computer.",
        b: "Gratis kortingsbon",
        c: "Klein gevaarlijk programmaatje dat gegevens lekt"
      },
      correctAnswer: "c"
    },
    {
      question: "Vraag 5. Je ontvang een mail waarin het onderwerp al zegt dat je gewonnen hebt.",
      answers: {
        a: "Je opent de mail niet een verwijdert hem gelijk.",
        b: "Je verspreid de mail met je contacten lijst.",
        c: "Je opent de mail en volgt de instructies om de prijs te ontvangen."
      },
      correctAnswer: "a"
    },
    {
      question: "Vraag 6. Je beste vriendin vraagt je je bankkaart te mogen gebruiken om iets te ontvangen?",
      answers: {
        a: "Je geeft haar je bankkaart en je pincode.",
        b: "Je zegt dat je bankkaart iets persoonlijk is en zo iets verboden is en je je bankkaart en pincode nooit mag vrijgeven.",
        c: "Je vraagt eerst een deel van het geld in ruil voor het gebruiken van je bankkaart."
      },
      correctAnswer: "b"
    },
    {
      question: "Vraag7. Wat is phishing?",
      answers: {
        a: "Een vorm van internetfraude.",
        b: "Een online spelletje.",
        c: "Een gevaarlijk virus."
      },
      correctAnswer: "a"
    },
    {
      question: "Vraag 8.  Wat is een goed wachtwoord?",
      answers: {
        a: "Je geboorte datum",
        b: "Je straatnaam",
        c: "Een moeilijk te raden samenstelling van zowel letters, cijfers als symbolen"
      },
      correctAnswer: "c"
    },
    {
      question: "Vraag 9.  Wat is kettingmail?",
      answers: {
        a: "Een lange e-mail die in heel veel kleine stukjes verstuurd wordt",
        b: "Een e-mail waarin iemand probeert om kettingen te verkopen",
        c: "Een e-mail die je vraagt om hem naar zoveel mogelijk mensen door te sturen"
      },
      correctAnswer: "c"
    },
    {
      question: "Vraag 10. Spam is...",
      answers: {
        a: "Iemand die veel posts op Facebook maakt.",
        b: "Ongewenste emails die massaal worden verzonden.",
        c: "Kleurplaatjes op het internet."
      },
      correctAnswer: "b"
    }
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;


  showSlide(currentSlide);
 
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
