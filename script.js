const chatContainer = document.getElementById("chatContainer");
const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

const sortingScreen = document.getElementById("sortingScreen");
const sortingBoard = document.getElementById("sortingBoard");
const currentNumberCard = document.getElementById("currentNumberCard");
const closeSortingGameButton = document.getElementById("closeSortingGameButton");
const restartSortingGameButton = document.getElementById("restartSortingGameButton");
const sortingSetupCard = document.getElementById("sortingSetupCard");
const sortingGameLayout = document.getElementById("sortingGameLayout");
const rangeButtons = document.getElementById("rangeButtons");
const selectedRangeText = document.getElementById("selectedRangeText");
const startSortingWithRangeButton = document.getElementById("startSortingWithRangeButton");
const currentRangeBadge = document.getElementById("currentRangeBadge");

const quizScreen = document.getElementById("quizScreen");
const quizProgress = document.getElementById("quizProgress");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const quizMainCard = document.getElementById("quizMainCard");
const quizResults = document.getElementById("quizResults");
const quizFinalTitle = document.getElementById("quizFinalTitle");
const quizFinalScore = document.getElementById("quizFinalScore");
const quizRankingText = document.getElementById("quizRankingText");
const quizReviewList = document.getElementById("quizReviewList");
const closeQuizGameButton = document.getElementById("closeQuizGameButton");
const restartQuizButton = document.getElementById("restartQuizButton");

const blockPuzzleScreen = document.getElementById("blockPuzzleScreen");
const blockBoard = document.getElementById("blockBoard");
const blockPiecesRow = document.getElementById("blockPiecesRow");
const blockPuzzleScore = document.getElementById("blockPuzzleScore");
const blockPuzzleStatus = document.getElementById("blockPuzzleStatus");
const closeBlockPuzzleButton = document.getElementById("closeBlockPuzzleButton");
const restartBlockPuzzleButton = document.getElementById("restartBlockPuzzleButton");

const quizTests = [
  [
    {
      question: "Which country has the larger population?",
      options: { A: "Germany", B: "Brazil", C: "Japan", D: "Canada" },
      correctAnswer: "B"
    },
    {
      question: "Which ocean is the largest on Earth?",
      options: { A: "Atlantic Ocean", B: "Indian Ocean", C: "Pacific Ocean", D: "Arctic Ocean" },
      correctAnswer: "C"
    },
    {
      question: "Which city is the capital of Australia?",
      options: { A: "Sydney", B: "Melbourne", C: "Canberra", D: "Perth" },
      correctAnswer: "C"
    },
    {
      question: "Which planet is known for having the most visible rings?",
      options: { A: "Mars", B: "Saturn", C: "Venus", D: "Mercury" },
      correctAnswer: "B"
    },
    {
      question: "Which country has more people?",
      options: { A: "India", B: "Russia", C: "Mexico", D: "France" },
      correctAnswer: "A"
    }
  ],
  [
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: { A: "Oxygen", B: "Nitrogen", C: "Carbon Dioxide", D: "Hydrogen" },
      correctAnswer: "C"
    },
    {
      question: "How many continents are there on Earth?",
      options: { A: "5", B: "6", C: "7", D: "8" },
      correctAnswer: "C"
    },
    {
      question: "Which animal is known as the king of the jungle?",
      options: { A: "Tiger", B: "Lion", C: "Elephant", D: "Wolf" },
      correctAnswer: "B"
    },
    {
      question: "Which is the smallest prime number?",
      options: { A: "0", B: "1", C: "2", D: "3" },
      correctAnswer: "C"
    },
    {
      question: "Which country is famous for the pyramids?",
      options: { A: "Mexico", B: "Egypt", C: "Greece", D: "Peru" },
      correctAnswer: "B"
    }
  ],
  [
    {
      question: "Which instrument has black and white keys?",
      options: { A: "Guitar", B: "Drum", C: "Piano", D: "Violin" },
      correctAnswer: "C"
    },
    {
      question: "What is the boiling point of water at sea level?",
      options: { A: "50°C", B: "75°C", C: "90°C", D: "100°C" },
      correctAnswer: "D"
    },
    {
      question: "Which language is primarily spoken in Brazil?",
      options: { A: "Spanish", B: "Portuguese", C: "French", D: "English" },
      correctAnswer: "B"
    },
    {
      question: "Which shape has three sides?",
      options: { A: "Square", B: "Circle", C: "Triangle", D: "Rectangle" },
      correctAnswer: "C"
    },
    {
      question: "Which star is at the center of our solar system?",
      options: { A: "Polaris", B: "Sirius", C: "The Sun", D: "Mars" },
      correctAnswer: "C"
    }
  ],
  [
    {
      question: "Which country is home to the city of Tokyo?",
      options: { A: "China", B: "South Korea", C: "Japan", D: "Thailand" },
      correctAnswer: "C"
    },
    {
      question: "Which metal is liquid at room temperature?",
      options: { A: "Iron", B: "Mercury", C: "Silver", D: "Aluminum" },
      correctAnswer: "B"
    },
    {
      question: "How many days are there in a leap year?",
      options: { A: "365", B: "366", C: "364", D: "367" },
      correctAnswer: "B"
    },
    {
      question: "Which organ pumps blood through the body?",
      options: { A: "Liver", B: "Lung", C: "Heart", D: "Kidney" },
      correctAnswer: "C"
    },
    {
      question: "Which sport uses a racket and a shuttlecock?",
      options: { A: "Tennis", B: "Badminton", C: "Basketball", D: "Baseball" },
      correctAnswer: "B"
    }
  ],
  [
    {
      question: "Which country is known for the Eiffel Tower?",
      options: { A: "Italy", B: "Spain", C: "France", D: "Belgium" },
      correctAnswer: "C"
    },
    {
      question: "What is the largest mammal in the world?",
      options: { A: "Elephant", B: "Blue Whale", C: "Giraffe", D: "Hippopotamus" },
      correctAnswer: "B"
    },
    {
      question: "Which planet is closest to the Sun?",
      options: { A: "Mercury", B: "Venus", C: "Earth", D: "Mars" },
      correctAnswer: "A"
    },
    {
      question: "Which number comes after 99?",
      options: { A: "100", B: "101", C: "98", D: "110" },
      correctAnswer: "A"
    },
    {
      question: "Which bird is often associated with peace?",
      options: { A: "Eagle", B: "Crow", C: "Dove", D: "Falcon" },
      correctAnswer: "C"
    }
  ],
  [
    {
      question: "Which is the largest desert in the world?",
      options: { A: "Sahara", B: "Gobi", C: "Antarctic Desert", D: "Arabian Desert" },
      correctAnswer: "C"
    },
    {
      question: "What do bees primarily make?",
      options: { A: "Milk", B: "Honey", C: "Wax paper", D: "Silk" },
      correctAnswer: "B"
    },
    {
      question: "Which continent is Egypt located in?",
      options: { A: "Asia", B: "Europe", C: "South America", D: "Africa" },
      correctAnswer: "D"
    },
    {
      question: "Which month has the fewest days?",
      options: { A: "January", B: "February", C: "April", D: "June" },
      correctAnswer: "B"
    },
    {
      question: "What is 12 × 12?",
      options: { A: "124", B: "122", C: "144", D: "132" },
      correctAnswer: "C"
    }
  ],
  [
    {
      question: "Which animal can live both on land and in water?",
      options: { A: "Frog", B: "Eagle", C: "Camel", D: "Shark" },
      correctAnswer: "A"
    },
    {
      question: "Which country has Rome as its capital?",
      options: { A: "Portugal", B: "Italy", C: "Austria", D: "Hungary" },
      correctAnswer: "B"
    },
    {
      question: "Which part of the plant usually grows underground?",
      options: { A: "Leaf", B: "Flower", C: "Root", D: "Fruit" },
      correctAnswer: "C"
    },
    {
      question: "How many hours are there in one day?",
      options: { A: "12", B: "18", C: "24", D: "36" },
      correctAnswer: "C"
    },
    {
      question: "Which country is famous for sushi?",
      options: { A: "Japan", B: "India", C: "Turkey", D: "Canada" },
      correctAnswer: "A"
    }
  ],
  [
    {
      question: "Which is the fastest land animal?",
      options: { A: "Cheetah", B: "Horse", C: "Leopard", D: "Wolf" },
      correctAnswer: "A"
    },
    {
      question: "Which device is mainly used to call people?",
      options: { A: "Microwave", B: "Telephone", C: "Toaster", D: "Printer" },
      correctAnswer: "B"
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: { A: "Earth", B: "Mars", C: "Jupiter", D: "Neptune" },
      correctAnswer: "C"
    },
    {
      question: "Which color do you get by mixing red and blue?",
      options: { A: "Green", B: "Purple", C: "Orange", D: "Brown" },
      correctAnswer: "B"
    },
    {
      question: "Which country has maple leaf on its flag?",
      options: { A: "Canada", B: "Sweden", C: "Norway", D: "Finland" },
      correctAnswer: "A"
    }
  ],
  [
    {
      question: "Which body part is used for hearing?",
      options: { A: "Eye", B: "Ear", C: "Nose", D: "Hand" },
      correctAnswer: "B"
    },
    {
      question: "Which planet is called the Red Planet?",
      options: { A: "Mars", B: "Venus", C: "Saturn", D: "Uranus" },
      correctAnswer: "A"
    },
    {
      question: "Which season comes after summer?",
      options: { A: "Spring", B: "Winter", C: "Autumn", D: "Monsoon" },
      correctAnswer: "C"
    },
    {
      question: "Which animal is famous for carrying its house on its back?",
      options: { A: "Snail", B: "Rabbit", C: "Cat", D: "Fox" },
      correctAnswer: "A"
    },
    {
      question: "Which country is Madrid the capital of?",
      options: { A: "Spain", B: "France", C: "Italy", D: "Portugal" },
      correctAnswer: "A"
    }
  ],
  [
    {
      question: "What is the freezing point of water?",
      options: { A: "0°C", B: "10°C", C: "32°C", D: "100°C" },
      correctAnswer: "A"
    },
    {
      question: "Which famous structure is in India?",
      options: { A: "Colosseum", B: "Taj Mahal", C: "Big Ben", D: "Statue of Liberty" },
      correctAnswer: "B"
    },
    {
      question: "Which is the longest river in the world in many school quizzes?",
      options: { A: "Amazon", B: "Nile", C: "Danube", D: "Yangtze" },
      correctAnswer: "B"
    },
    {
      question: "Which classroom subject usually involves experiments?",
      options: { A: "Science", B: "History", C: "Literature", D: "Art" },
      correctAnswer: "A"
    },
    {
      question: "Which fruit is yellow and curved?",
      options: { A: "Apple", B: "Banana", C: "Pear", D: "Cherry" },
      correctAnswer: "B"
    }
  ]
];

let activeQuizQuestions = [];

let mode = "menu";
let botQueue = Promise.resolve();
let botIsBusy = false;
let botSessionId = 0;

/* Sorting state */
let sortingValues = Array(10).fill(null);
let sortingCurrentNumber = null;
let sortingGameOver = false;
let sortingSelectedRange = null;
let sortingAvailableNumbers = [];

/* Quiz state */
let currentQuestionIndex = 0;
let quizScore = 0;
let quizAnswers = [];
let quizLocked = false;

/* Block puzzle state */
const BLOCK_BOARD_SIZE = 8;

let blockBoardState = [];
let blockCurrentPieces = [];
let blockSelectedPieceIndex = null;
let blockGameOver = false;
let blockScore = 0;

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function updateInputState() {
  const shouldDisable = botIsBusy;

  messageInput.disabled = shouldDisable;
  sendButton.disabled = shouldDisable;

  if (botIsBusy) {
    messageInput.placeholder = "Bot is typing...";
  } else {
    messageInput.placeholder = "Type your message...";
  }
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);

  const messageText = document.createElement("div");
  messageText.classList.add("message-text");
  messageText.textContent = text;

  const messageTime = document.createElement("div");
  messageTime.classList.add("message-time");
  messageTime.textContent = getCurrentTime();

  messageDiv.appendChild(messageText);
  messageDiv.appendChild(messageTime);

  chatMessages.appendChild(messageDiv);
  scrollToBottom();
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function calculateTypingDelay(text) {
  const cleanText = text.trim();
  const wordCount = cleanText === "" ? 0 : cleanText.split(/\s+/).length;

  const perWordDelay = 120;
  const baseDelay = 500;
  const minDelay = 900;
  const maxDelay = 2800;

  const calculatedDelay = baseDelay + wordCount * perWordDelay;
  return Math.min(Math.max(calculatedDelay, minDelay), maxDelay);
}

function createTypingIndicator() {
  const typingWrapper = document.createElement("div");
  typingWrapper.classList.add("message", "bot");

  const typingContent = document.createElement("div");
  typingContent.classList.add("message-text", "typing-indicator");

  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("span");
    dot.classList.add("typing-dot");
    typingContent.appendChild(dot);
  }

  typingWrapper.appendChild(typingContent);
  chatMessages.appendChild(typingWrapper);
  scrollToBottom();

  return typingWrapper;
}

function clearBotQueue() {
  botSessionId += 1;
  botQueue = Promise.resolve();
  botIsBusy = false;
  updateInputState();
}

async function botReply(text, sessionId) {
  if (sessionId !== botSessionId) return;

  botIsBusy = true;
  updateInputState();

  const typingIndicator = createTypingIndicator();
  const typingDelay = calculateTypingDelay(text);

  await wait(typingDelay);

  if (sessionId !== botSessionId) {
    typingIndicator.remove();
    return;
  }

  typingIndicator.remove();
  addMessage(text, "bot");
  await wait(250);
}

function queueBotReply(text) {
  const sessionId = botSessionId;

  botQueue = botQueue
    .then(() => botReply(text, sessionId))
    .finally(() => {
      if (sessionId === botSessionId) {
        botIsBusy = false;
        updateInputState();
        messageInput.focus();
      }
    });

  return botQueue;
}

function queueBotReplies(messages) {
  messages.forEach((message) => queueBotReply(message));
}

function showOnlyScreen(screenName) {
  chatContainer.classList.add("hidden");
  sortingScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  blockPuzzleScreen.classList.add("hidden");

  if (screenName === "chat") chatContainer.classList.remove("hidden");
  if (screenName === "sorting") sortingScreen.classList.remove("hidden");
  if (screenName === "quiz") quizScreen.classList.remove("hidden");
  if (screenName === "blockPuzzle") blockPuzzleScreen.classList.remove("hidden");
}

function showGameMenu() {
  queueBotReplies([
    "Hello! Welcome to GameBot.",
    "Available games: quiz, number sorting, block puzzle.",
    "Type the name of the game you want to play."
  ]);
}

function showAvailableGamesAgain() {
  queueBotReplies([
    "That game is not available right now.",
    "Available games: quiz, number sorting, block puzzle.",
    "Which game would you like to play?"
  ]);
}

/* Sorting game */

function updateSortingSetupUI() {
  const buttons = rangeButtons.querySelectorAll(".range-button");

  buttons.forEach((button) => {
    const rangeValue = Number(button.dataset.range);
    button.classList.toggle("active", rangeValue === sortingSelectedRange);
  });

  if (sortingSelectedRange) {
    selectedRangeText.textContent = `Selected range: 1 - ${sortingSelectedRange}`;
    startSortingWithRangeButton.disabled = false;
  } else {
    selectedRangeText.textContent = "No range selected";
    startSortingWithRangeButton.disabled = true;
  }
}

function buildAvailableSortingNumbers(rangeMax) {
  sortingAvailableNumbers = Array.from({ length: rangeMax }, (_, index) => index + 1);
}

function getRandomUniqueSortingNumber() {
  if (sortingAvailableNumbers.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * sortingAvailableNumbers.length);
  const chosenNumber = sortingAvailableNumbers[randomIndex];
  sortingAvailableNumbers.splice(randomIndex, 1);

  return chosenNumber;
}

function createSortingBoard() {
  sortingBoard.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const box = document.createElement("div");
    box.classList.add("sorting-box");
    box.dataset.index = i;

    const label = document.createElement("div");
    label.classList.add("box-label");
    label.textContent = `${i + 1}`;

    const value = document.createElement("div");
    value.classList.add("box-value");
    value.textContent = "";

    box.appendChild(label);
    box.appendChild(value);

    box.addEventListener("click", () => {
      if (sortingGameOver || sortingCurrentNumber === null) return;
      if (sortingValues[i] !== null) return;
      placeSortingNumber(i);
    });

    sortingBoard.appendChild(box);
  }
}

function renderSortingBoard() {
  [...sortingBoard.children].forEach((box, index) => {
    const valueElement = box.querySelector(".box-value");
    const currentValue = sortingValues[index];

    box.classList.remove("filled", "lose", "win");

    if (currentValue === null) {
      valueElement.textContent = "";
    } else {
      valueElement.textContent = currentValue;
      box.classList.add("filled");
    }
  });
}

function updateSortingCard() {
  if (sortingCurrentNumber === null || sortingGameOver) {
    currentNumberCard.textContent = "-";
    currentNumberCard.classList.add("disabled");
    return;
  }

  currentNumberCard.textContent = sortingCurrentNumber;
  currentNumberCard.classList.remove("disabled");
}

function generateNextSortingNumber() {
  sortingCurrentNumber = getRandomUniqueSortingNumber();
  updateSortingCard();
}

function isPlacementValid(index, value) {
  for (let i = 0; i < index; i++) {
    if (sortingValues[i] !== null && value < sortingValues[i]) {
      return false;
    }
  }

  for (let i = index + 1; i < sortingValues.length; i++) {
    if (sortingValues[i] !== null && value > sortingValues[i]) {
      return false;
    }
  }

  return true;
}

function markSortingBox(index, className) {
  const box = sortingBoard.children[index];
  if (box) box.classList.add(className);
}

function placeSortingNumber(index) {
  if (sortingGameOver || sortingCurrentNumber === null) return;
  if (sortingValues[index] !== null) return;

  const value = sortingCurrentNumber;
  sortingValues[index] = value;
  renderSortingBoard();

  if (!isPlacementValid(index, value)) {
    sortingGameOver = true;
    sortingCurrentNumber = null;
    updateSortingCard();
    markSortingBox(index, "lose");

    queueBotReplies([
      `Game over. ${value} breaks the ascending order.`,
      "That number does not fit correctly in the full sequence.",
      "Press Restart to try again or X to return to the chat."
    ]);
    return;
  }

  const filledCount = sortingValues.filter((item) => item !== null).length;

  if (filledCount === 10) {
    sortingGameOver = true;
    sortingCurrentNumber = null;
    updateSortingCard();

    [...sortingBoard.children].forEach((box) => box.classList.add("win"));

    queueBotReplies([
      "Amazing! You placed all 10 numbers correctly.",
      "You win the number sorting game.",
      "Press Restart to play again or X to return to the chat."
    ]);
    return;
  }

  generateNextSortingNumber();
}

function openSortingSetupScreen() {
  clearBotQueue();

  mode = "sorting";
  sortingSelectedRange = null;
  sortingGameOver = false;
  sortingValues = Array(10).fill(null);
  sortingCurrentNumber = null;
  sortingAvailableNumbers = [];

  sortingSetupCard.classList.remove("hidden");
  sortingGameLayout.classList.add("hidden");
  currentRangeBadge.textContent = "Range: -";

  updateSortingSetupUI();
  showOnlyScreen("sorting");
}

function startNumberSortingGame() {
  if (!sortingSelectedRange) return;

  sortingValues = Array(10).fill(null);
  sortingCurrentNumber = null;
  sortingGameOver = false;

  buildAvailableSortingNumbers(sortingSelectedRange);
  createSortingBoard();
  renderSortingBoard();

  sortingSetupCard.classList.add("hidden");
  sortingGameLayout.classList.remove("hidden");
  currentRangeBadge.textContent = `Range: 1 - ${sortingSelectedRange}`;

  generateNextSortingNumber();
}

function restartSortingGame() {
  clearBotQueue();

  if (!sortingSelectedRange) {
    openSortingSetupScreen();
    return;
  }

  startNumberSortingGame();
}

function closeSortingGame() {
  clearBotQueue();
  showOnlyScreen("chat");
  mode = "menu";

  queueBotReplies([
    "You left the number sorting game.",
    "Available games: quiz, number sorting, block puzzle.",
    "Which game would you like to play?"
  ]);
}

/* Quiz game */

function getRankingMessage(score, total) {
  if (score === total) {
    return "Outstanding performance. You are in the top 10% of players.";
  }
  if (score === total - 1) {
    return "Excellent result. You are in the top 20% of players.";
  }
  if (score === 3) {
    return "Great effort. You are in the top 35% of players.";
  }
  if (score === 2) {
    return "Nice try. You are in the top 50% of players.";
  }
  return "Good start. Keep practicing and come back stronger for the next test.";
}

function getRandomQuizTest() {
  const randomIndex = Math.floor(Math.random() * quizTests.length);
  return quizTests[randomIndex].map((question) => ({
    question: question.question,
    options: { ...question.options },
    correctAnswer: question.correctAnswer
  }));
}

function startQuizGame() {
  clearBotQueue();

  mode = "quiz";
  currentQuestionIndex = 0;
  quizScore = 0;
  quizAnswers = [];
  quizLocked = false;
  activeQuizQuestions = getRandomQuizTest();

  quizMainCard.classList.remove("hidden");
  quizResults.classList.add("hidden");
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";

  showOnlyScreen("quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const currentQuestion = activeQuizQuestions[currentQuestionIndex];

  quizProgress.textContent = `Question ${currentQuestionIndex + 1} of ${activeQuizQuestions.length}`;
  quizQuestion.textContent = currentQuestion.question;
  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";
  quizLocked = false;

  Object.entries(currentQuestion.options).forEach(([letter, text]) => {
    const button = document.createElement("button");
    button.classList.add("quiz-option");
    button.type = "button";
    button.innerHTML = `<span class="quiz-option-letter">${letter}</span><span>${text}</span>`;

    button.addEventListener("click", () => handleQuizOptionClick(letter, button));
    quizOptions.appendChild(button);
  });
}

async function handleQuizOptionClick(selectedLetter, selectedButton) {
  if (quizLocked) return;
  quizLocked = true;

  const currentQuestion = activeQuizQuestions[currentQuestionIndex];
  const correctLetter = currentQuestion.correctAnswer;
  const optionButtons = [...quizOptions.children];

  optionButtons.forEach((button) => {
    button.disabled = true;
  });

  selectedButton.classList.add("selected");

  if (selectedLetter === correctLetter) {
    quizScore++;
    selectedButton.classList.add("correct");
    quizFeedback.textContent = "Correct answer!";
    quizFeedback.classList.add("correct-text");
  } else {
    selectedButton.classList.add("wrong");

    const correctButton = optionButtons.find(
      (button) =>
        button.querySelector(".quiz-option-letter").textContent === correctLetter
    );

    if (correctButton) {
      correctButton.classList.add("correct");
    }

    quizFeedback.textContent = `Wrong answer. The correct answer was ${correctLetter}.`;
    quizFeedback.classList.add("wrong-text");
  }

  quizAnswers.push({
    question: currentQuestion.question,
    options: currentQuestion.options,
    selectedAnswer: selectedLetter,
    correctAnswer: correctLetter
  });

  await wait(1100);

  if (mode !== "quiz") return;

  currentQuestionIndex++;

  if (currentQuestionIndex < activeQuizQuestions.length) {
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  quizMainCard.classList.add("hidden");
  quizResults.classList.remove("hidden");

  quizFinalTitle.textContent = "Quiz Completed";
  quizFinalScore.textContent = `${quizScore} / ${activeQuizQuestions.length}`;
  quizRankingText.textContent = getRankingMessage(quizScore, activeQuizQuestions.length);

  quizReviewList.innerHTML = "";

  quizAnswers.forEach((item, index) => {
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    const title = document.createElement("h4");
    title.textContent = `${index + 1}. ${item.question}`;
    reviewCard.appendChild(title);

    const reviewOptions = document.createElement("div");
    reviewOptions.classList.add("review-options");

    Object.entries(item.options).forEach(([letter, text]) => {
      const option = document.createElement("div");
      option.classList.add("review-option");
      option.innerHTML = `<strong>${letter})</strong> ${text}`;

      if (letter === item.correctAnswer) {
        option.classList.add("correct");
      }

      if (letter === item.selectedAnswer) {
        option.classList.add("user-selected");
        if (item.selectedAnswer !== item.correctAnswer) {
          option.classList.add("wrong");
        }
      }

      reviewOptions.appendChild(option);
    });

    const badge = document.createElement("div");
    badge.classList.add("review-badge");

    if (item.selectedAnswer === item.correctAnswer) {
      badge.textContent = `Your answer: ${item.selectedAnswer} • Correct`;
    } else {
      badge.textContent = `Your answer: ${item.selectedAnswer} • Correct answer: ${item.correctAnswer}`;
    }

    reviewCard.appendChild(reviewOptions);
    reviewCard.appendChild(badge);
    quizReviewList.appendChild(reviewCard);
  });
}

function restartQuizGame() {
  clearBotQueue();
  startQuizGame();
}

function closeQuizGame() {
  clearBotQueue();
  showOnlyScreen("chat");
  mode = "menu";

  queueBotReplies([
    "You left the general knowledge quiz.",
    "Available games: quiz, number sorting, block puzzle.",
    "Which game would you like to play?"
  ]);
}

/* Block Puzzle */

const blockShapes = [
  [[1]],
  [[1, 1]],
  [[1], [1]],
  [[1, 1, 1]],
  [[1], [1], [1]],
  [[1, 1], [1, 1]],
  [[1, 0], [1, 1]],
  [[0, 1], [1, 1]],
  [[1, 1], [1, 0]],
  [[1, 1], [0, 1]],
  [[1, 1, 1], [0, 1, 0]],
  [[0, 1, 0], [1, 1, 1]],
  [[1, 1, 1], [1, 0, 0]],
  [[1, 1, 1], [0, 0, 1]]
];

function createEmptyBlockBoard() {
  return Array.from({ length: BLOCK_BOARD_SIZE }, () =>
    Array(BLOCK_BOARD_SIZE).fill(0)
  );
}

function updateBlockPuzzleScore() {
  blockPuzzleScore.textContent = blockScore;
}

function updateBlockPuzzleStatus(text) {
  blockPuzzleStatus.textContent = text;
}

function createBlockBoardUI() {
  blockBoard.innerHTML = "";

  for (let row = 0; row < BLOCK_BOARD_SIZE; row++) {
    for (let col = 0; col < BLOCK_BOARD_SIZE; col++) {
      const cell = document.createElement("div");
      cell.classList.add("block-cell");
      cell.dataset.row = row;
      cell.dataset.col = col;

      cell.addEventListener("click", () => {
        handleBlockBoardClick(row, col);
      });

      cell.addEventListener("mouseenter", () => {
        previewBlockPlacement(row, col);
      });

      cell.addEventListener("mouseleave", () => {
        clearBlockPreview();
      });

      blockBoard.appendChild(cell);
    }
  }
}

function renderBlockBoard() {
  const cells = [...blockBoard.children];

  cells.forEach((cell) => {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    cell.classList.remove("filled", "preview-valid", "preview-invalid");

    if (blockBoardState[row][col] === 1) {
      cell.classList.add("filled");
    }
  });
}

function getRandomBlockShape() {
  const randomIndex = Math.floor(Math.random() * blockShapes.length);
  return blockShapes[randomIndex].map((row) => [...row]);
}

function getRandomPlayableBlockShape() {
  const shuffledShapes = [...blockShapes].sort(() => Math.random() - 0.5);

  for (const shape of shuffledShapes) {
    if (canShapeFitAnywhere(shape)) {
      return shape.map((row) => [...row]);
    }
  }

  return null;
}

function canShapeFitAnywhere(shape) {
  for (let row = 0; row < BLOCK_BOARD_SIZE; row++) {
    for (let col = 0; col < BLOCK_BOARD_SIZE; col++) {
      if (canPlaceBlock(shape, row, col)) {
        return true;
      }
    }
  }

  return false;
}

function generatePlayableBlockPieces() {
  const guaranteedShape = getRandomPlayableBlockShape();

  if (!guaranteedShape) {
    return [];
  }

  const pieces = [{ shape: guaranteedShape, used: false }];

  for (let i = 0; i < 2; i++) {
    pieces.push({
      shape: getRandomBlockShape(),
      used: false
    });
  }

  return pieces.sort(() => Math.random() - 0.5);
}

function generateBlockPieces() {
  blockCurrentPieces = generatePlayableBlockPieces();
  blockSelectedPieceIndex = null;
  renderBlockPieces();
}

function renderSingleBlockPiece(shape) {
  const rows = shape.length;
  const cols = shape[0].length;

  const wrapper = document.createElement("div");
  wrapper.classList.add("block-piece-grid");
  wrapper.style.gridTemplateColumns = `repeat(${cols}, 22px)`;
  wrapper.style.gridTemplateRows = `repeat(${rows}, 22px)`;

  if (window.innerWidth <= 700) {
    wrapper.style.gridTemplateColumns = `repeat(${cols}, 18px)`;
    wrapper.style.gridTemplateRows = `repeat(${rows}, 18px)`;
  }

  shape.forEach((row) => {
    row.forEach((cellValue) => {
      const cell = document.createElement("div");
      cell.classList.add("block-piece-cell");
      if (cellValue === 1) {
        cell.classList.add("active");
      }
      wrapper.appendChild(cell);
    });
  });

  return wrapper;
}

function renderBlockPieces() {
  blockPiecesRow.innerHTML = "";

  blockCurrentPieces.forEach((piece, index) => {
    const card = document.createElement("div");
    card.classList.add("block-piece-card");

    if (piece.used) {
      card.classList.add("used");
    }

    if (blockSelectedPieceIndex === index && !piece.used) {
      card.classList.add("selected");
    }

    card.addEventListener("click", () => {
      if (piece.used || blockGameOver) return;

      if (blockSelectedPieceIndex === index) {
        blockSelectedPieceIndex = null;
        updateBlockPuzzleStatus("Block selection cleared");
      } else {
        blockSelectedPieceIndex = index;
        updateBlockPuzzleStatus("Now tap a position on the board");
      }

      renderBlockPieces();
      clearBlockPreview();
    });

    card.appendChild(renderSingleBlockPiece(piece.shape));
    blockPiecesRow.appendChild(card);
  });
}

function getSelectedBlockPiece() {
  if (blockSelectedPieceIndex === null) return null;
  return blockCurrentPieces[blockSelectedPieceIndex];
}

function canPlaceBlock(shape, startRow, startCol) {
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== 1) continue;

      const boardRow = startRow + row;
      const boardCol = startCol + col;

      if (
        boardRow < 0 ||
        boardRow >= BLOCK_BOARD_SIZE ||
        boardCol < 0 ||
        boardCol >= BLOCK_BOARD_SIZE
      ) {
        return false;
      }

      if (blockBoardState[boardRow][boardCol] === 1) {
        return false;
      }
    }
  }

  return true;
}

function previewBlockPlacement(startRow, startCol) {
  clearBlockPreview();

  const selectedPiece = getSelectedBlockPiece();
  if (!selectedPiece || selectedPiece.used) return;

  const isValid = canPlaceBlock(selectedPiece.shape, startRow, startCol);

  for (let row = 0; row < selectedPiece.shape.length; row++) {
    for (let col = 0; col < selectedPiece.shape[row].length; col++) {
      if (selectedPiece.shape[row][col] !== 1) continue;

      const boardRow = startRow + row;
      const boardCol = startCol + col;

      if (
        boardRow < 0 ||
        boardRow >= BLOCK_BOARD_SIZE ||
        boardCol < 0 ||
        boardCol >= BLOCK_BOARD_SIZE
      ) {
        continue;
      }

      const targetCell = blockBoard.querySelector(
        `.block-cell[data-row="${boardRow}"][data-col="${boardCol}"]`
      );

      if (targetCell && !targetCell.classList.contains("filled")) {
        targetCell.classList.add(isValid ? "preview-valid" : "preview-invalid");
      }
    }
  }
}

function clearBlockPreview() {
  [...blockBoard.children].forEach((cell) => {
    cell.classList.remove("preview-valid", "preview-invalid");
  });
}

function placeBlock(shape, startRow, startCol) {
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] === 1) {
        blockBoardState[startRow + row][startCol + col] = 1;
      }
    }
  }
}

function clearCompletedLines() {
  const fullRows = [];
  const fullCols = [];

  for (let row = 0; row < BLOCK_BOARD_SIZE; row++) {
    if (blockBoardState[row].every((cell) => cell === 1)) {
      fullRows.push(row);
    }
  }

  for (let col = 0; col < BLOCK_BOARD_SIZE; col++) {
    let isFull = true;

    for (let row = 0; row < BLOCK_BOARD_SIZE; row++) {
      if (blockBoardState[row][col] !== 1) {
        isFull = false;
        break;
      }
    }

    if (isFull) {
      fullCols.push(col);
    }
  }

  fullRows.forEach((row) => {
    for (let col = 0; col < BLOCK_BOARD_SIZE; col++) {
      blockBoardState[row][col] = 0;
    }
  });

  fullCols.forEach((col) => {
    for (let row = 0; row < BLOCK_BOARD_SIZE; row++) {
      blockBoardState[row][col] = 0;
    }
  });

  return fullRows.length + fullCols.length;
}

function areAllBlockPiecesUsed() {
  return blockCurrentPieces.every((piece) => piece.used);
}

function hasAnyValidMoveForCurrentPieces() {
  const remainingPieces = blockCurrentPieces.filter((piece) => !piece.used);

  if (remainingPieces.length === 0) {
    return true;
  }

  for (const piece of remainingPieces) {
    for (let row = 0; row < BLOCK_BOARD_SIZE; row++) {
      for (let col = 0; col < BLOCK_BOARD_SIZE; col++) {
        if (canPlaceBlock(piece.shape, row, col)) {
          return true;
        }
      }
    }
  }

  return false;
}

function finishBlockPuzzleGame() {
  if (blockGameOver) return;

  blockGameOver = true;
  blockSelectedPieceIndex = null;
  renderBlockPieces();
  clearBlockPreview();

  queueBotReplies([
    `Game over. Your block puzzle score is ${blockScore}.`,
    "There are no more valid moves left for the remaining blocks.",
    "Press Restart to play again or X to return to the chat."
  ]);
}

function handleBlockBoardClick(row, col) {
  if (blockGameOver) return;

  const selectedPiece = getSelectedBlockPiece();

  if (!selectedPiece) {
    updateBlockPuzzleStatus("First choose one of the blocks below");
    return;
  }

  if (selectedPiece.used) return;

  if (!canPlaceBlock(selectedPiece.shape, row, col)) {
    updateBlockPuzzleStatus("That block does not fit there");
    return;
  }

  placeBlock(selectedPiece.shape, row, col);
  selectedPiece.used = true;

  let placedCellCount = 0;
  selectedPiece.shape.forEach((shapeRow) => {
    shapeRow.forEach((value) => {
      if (value === 1) placedCellCount++;
    });
  });

  blockScore += placedCellCount;

  const clearedLines = clearCompletedLines();
  if (clearedLines > 0) {
    blockScore += clearedLines * 10;
    updateBlockPuzzleStatus(`Great move! Cleared ${clearedLines} line${clearedLines > 1 ? "s" : ""}`);
  } else {
    updateBlockPuzzleStatus("Block placed successfully");
  }

  blockSelectedPieceIndex = null;

  renderBlockBoard();
  renderBlockPieces();
  updateBlockPuzzleScore();
  clearBlockPreview();

  if (areAllBlockPiecesUsed()) {
    const nextPieces = generatePlayableBlockPieces();

    if (nextPieces.length === 0) {
      finishBlockPuzzleGame();
      return;
    }

    blockCurrentPieces = nextPieces;
    renderBlockPieces();
    updateBlockPuzzleStatus("New blocks generated");
    return;
  }

  if (!hasAnyValidMoveForCurrentPieces()) {
    finishBlockPuzzleGame();
  }
}

function startBlockPuzzleGame() {
  clearBotQueue();

  mode = "blockPuzzle";
  blockBoardState = createEmptyBlockBoard();
  blockCurrentPieces = [];
  blockSelectedPieceIndex = null;
  blockGameOver = false;
  blockScore = 0;

  showOnlyScreen("blockPuzzle");
  createBlockBoardUI();
  renderBlockBoard();
  generateBlockPieces();
  updateBlockPuzzleScore();
  updateBlockPuzzleStatus("Select a block to start");
}

function restartBlockPuzzleGame() {
  clearBotQueue();
  startBlockPuzzleGame();
}

function closeBlockPuzzleGame() {
  clearBotQueue();
  showOnlyScreen("chat");
  mode = "menu";

  queueBotReplies([
    "You left the block puzzle game.",
    "Available games: quiz, number sorting, block puzzle.",
    "Which game would you like to play?"
  ]);
}

/* Chat menu */

function handleMenuSelection(userMessage) {
  const selectedGame = normalizeText(userMessage);

  if (selectedGame === "quiz" || selectedGame === "quiz game") {
    startQuizGame();
  } else if (
    selectedGame === "number sorting" ||
    selectedGame === "sorting game" ||
    selectedGame === "number sort" ||
    selectedGame === "sorting"
  ) {
    openSortingSetupScreen();
  } else if (
    selectedGame === "block puzzle" ||
    selectedGame === "block" ||
    selectedGame === "block blast" ||
    selectedGame === "puzzle"
  ) {
    startBlockPuzzleGame();
  } else {
    showAvailableGamesAgain();
  }
}

function handleUserInput() {
  if (botIsBusy) return;

  const userMessage = messageInput.value.trim();
  if (userMessage === "") return;

  addMessage(userMessage, "user");
  messageInput.value = "";

  if (mode === "menu") {
    handleMenuSelection(userMessage);
  }
}

/* Events */

rangeButtons.addEventListener("click", (event) => {
  const button = event.target.closest(".range-button");
  if (!button) return;

  sortingSelectedRange = Number(button.dataset.range);
  updateSortingSetupUI();
});

startSortingWithRangeButton.addEventListener("click", startNumberSortingGame);

closeSortingGameButton.addEventListener("click", closeSortingGame);
restartSortingGameButton.addEventListener("click", restartSortingGame);

closeQuizGameButton.addEventListener("click", closeQuizGame);
restartQuizButton.addEventListener("click", restartQuizGame);

closeBlockPuzzleButton.addEventListener("click", closeBlockPuzzleGame);
restartBlockPuzzleButton.addEventListener("click", restartBlockPuzzleGame);

sendButton.addEventListener("click", handleUserInput);

messageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});

/* Init */

updateInputState();
showOnlyScreen("chat");
showGameMenu();