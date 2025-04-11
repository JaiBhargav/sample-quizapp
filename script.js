// Quiz Questions Data
const quizData = {
    aws: [
        {
            question: "What does AWS stand for?",
            options: [
                "Amazon Web Services",
                "Advanced Web Solutions",
                "Automated Web Systems",
                "American Web Standard"
            ],
            answer: 0
        },
        {
            question: "Which AWS service provides object storage?",
            options: [
                "EC2",
                "S3",
                "Lambda",
                "RDS"
            ],
            answer: 1
        },
        {
            question: "What is the AWS region with code 'us-east-1'?",
            options: [
                "Northern Virginia",
                "Ohio",
                "Oregon",
                "California"
            ],
            answer: 0
        },
        {
            question: "Which service allows you to run code without provisioning servers?",
            options: [
                "EC2",
                "Lambda",
                "Elastic Beanstalk",
                "Fargate"
            ],
            answer: 1
        },
        {
            question: "What is AWS's CDN service called?",
            options: [
                "CloudFront",
                "Route 53",
                "Direct Connect",
                "API Gateway"
            ],
            answer: 0
        },
        {
            question: "Which database service is fully managed by AWS?",
            options: [
                "RDS",
                "DynamoDB",
                "Redshift",
                "All of the above"
            ],
            answer: 3
        },
        {
            question: "What is the maximum size of an S3 object?",
            options: [
                "1 TB",
                "5 TB",
                "10 TB",
                "50 TB"
            ],
            answer: 1
        },
        {
            question: "Which AWS service provides DNS functionality?",
            options: [
                "CloudFront",
                "Route 53",
                "API Gateway",
                "Direct Connect"
            ],
            answer: 1
        },
        {
            question: "What does VPC stand for in AWS?",
            options: [
                "Virtual Private Cloud",
                "Virtual Public Cloud",
                "Verified Private Connection",
                "Virtualized Platform Cluster"
            ],
            answer: 0
        },
        {
            question: "Which service helps with cost optimization in AWS?",
            options: [
                "Trusted Advisor",
                "CloudWatch",
                "Config",
                "Inspector"
            ],
            answer: 0
        }
    ],
    webdev: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },
        {
            question: "Which CSS property changes the text color?",
            options: [
                "text-color",
                "font-color",
                "color",
                "text-style"
            ],
            answer: 2
        },
        {
            question: "Which JavaScript keyword declares a variable?",
            options: [
                "var",
                "let",
                "const",
                "All of the above"
            ],
            answer: 3
        },
        {
            question: "What does API stand for?",
            options: [
                "Application Programming Interface",
                "Automated Programming Interface",
                "Advanced Programming Instruction",
                "Application Process Integration"
            ],
            answer: 0
        },
        {
            question: "Which HTML tag is used for a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<hyperlink>"
            ],
            answer: 1
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: 2
        },
        {
            question: "Which method adds a new element to the end of an array?",
            options: [
                "push()",
                "pop()",
                "shift()",
                "unshift()"
            ],
            answer: 0
        },
        {
            question: "What does DOM stand for?",
            options: [
                "Document Object Model",
                "Data Object Management",
                "Digital Output Model",
                "Display Object Method"
            ],
            answer: 0
        },
        {
            question: "Which HTML5 element is used for video content?",
            options: [
                "<media>",
                "<video>",
                "<movie>",
                "<play>"
            ],
            answer: 1
        },
        {
            question: "Which symbol is used for single-line comments in JavaScript?",
            options: [
                "//",
                "/*",
                "#",
                "--"
            ],
            answer: 0
        }
    ],
    devops: [
        {
            question: "What is the main goal of DevOps?",
            options: [
                "To separate development and operations",
                "To automate everything",
                "To bridge development and operations",
                "To eliminate operations teams"
            ],
            answer: 2
        },
        {
            question: "Which tool is used for containerization?",
            options: [
                "Kubernetes",
                "Docker",
                "Jenkins",
                "Ansible"
            ],
            answer: 1
        },
        {
            question: "What does CI/CD stand for?",
            options: [
                "Continuous Integration/Continuous Deployment",
                "Code Integration/Code Deployment",
                "Computer Infrastructure/Computer Development",
                "Continuous Inspection/Continuous Delivery"
            ],
            answer: 0
        },
        {
            question: "Which tool is used for infrastructure as code?",
            options: [
                "Terraform",
                "Docker",
                "Kubernetes",
                "Jenkins"
            ],
            answer: 0
        },
        {
            question: "What is Kubernetes used for?",
            options: [
                "Container orchestration",
                "Configuration management",
                "Continuous integration",
                "Cloud provisioning"
            ],
            answer: 0
        },
        {
            question: "Which file is used to define Docker containers?",
            options: [
                "Dockerfile",
                "Containerfile",
                "Docker.config",
                "docker-compose.yml"
            ],
            answer: 0
        },
        {
            question: "What is the main benefit of microservices?",
            options: [
                "Simpler architecture",
                "Independent deployability",
                "Lower cost",
                "Faster compilation"
            ],
            answer: 1
        },
        {
            question: "Which tool is commonly used for configuration management?",
            options: [
                "Ansible",
                "Docker",
                "Kubernetes",
                "Terraform"
            ],
            answer: 0
        },
        {
            question: "What does IaC stand for?",
            options: [
                "Infrastructure as Code",
                "Integration as Configuration",
                "Internet as Cloud",
                "Implementation as Component"
            ],
            answer: 0
        },
        {
            question: "Which cloud model provides the most control?",
            options: [
                "SaaS",
                "PaaS",
                "IaaS",
                "FaaS"
            ],
            answer: 2
        }
    ]
};

// DOM Elements
const quizCards = document.querySelectorAll('.quiz-card');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');
const timerDisplay = document.querySelector('.timer');
const scoreDisplay = document.querySelector('.score span');
const finalScoreDisplay = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');

// Quiz State
let currentTopic = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

// Event Listeners
quizCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('start-quiz')) {
            currentTopic = card.dataset.topic;
            startQuiz();
        }
    });
});

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
homeBtn.addEventListener('click', goHome);

// Functions
function startQuiz() {
    document.querySelector('.quiz-cards').classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    showQuestion();
}

function showQuestion() {
    resetState();
    timeLeft = 30;
    timerDisplay.textContent = timeLeft;
    
    // Start timer
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
    
    const currentQuestion = quizData[currentTopic][currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hidden');
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestion = quizData[currentTopic][currentQuestionIndex];
    const options = optionsContainer.querySelectorAll('.option-btn');
    
    if (selectedIndex === currentQuestion.answer) {
        options[selectedIndex].classList.add('correct');
        score++;
        scoreDisplay.textContent = score;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[currentQuestion.answer].classList.add('correct');
    }
    
    // Disable all options after selection
    options.forEach(option => {
        option.disabled = true;
    });
    
    nextBtn.classList.remove('hidden');
}

function handleTimeOut() {
    const options = optionsContainer.querySelectorAll('.option-btn');
    const currentQuestion = quizData[currentTopic][currentQuestionIndex];
    
    options[currentQuestion.answer].classList.add('correct');
    
    // Disable all options
    options.forEach(option => {
        option.disabled = true;
    });
    
    nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[currentTopic].length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    finalScoreDisplay.textContent = `${score}/${quizData[currentTopic].length}`;
    
    // Set result message based on score
    const percentage = (score / quizData[currentTopic].length) * 100;
    if (percentage >= 80) {
        resultMessage.textContent = "Excellent work! You really know your stuff!";
    } else if (percentage >= 50) {
        resultMessage.textContent = "Good job! With a bit more practice you'll master this!";
    } else {
        resultMessage.textContent = "Keep practicing! Review the material and try again!";
    }
}

function restartQuiz() {
    resultsScreen.classList.add('hidden');
    startQuiz();
}

function goHome() {
    resultsScreen.classList.add('hidden');
    document.querySelector('.quiz-cards').classList.remove('hidden');
}