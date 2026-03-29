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

const quizQuestions = [
  {
    question: "Which country has the larger population?",
    options: {
      A: "Germany",
      B: "Brazil",
      C: "Japan",
      D: "Canada"
    },
    correctAnswer: "B"
  },
  {
    question: "Which ocean is the largest on Earth?",
    options: {
      A: "Atlantic Ocean",
      B: "Indian Ocean",
      C: "Pacific Ocean",
      D: "Arctic Ocean"
    },
    correctAnswer: "C"
  },
  {
    question: "Which city is the capital of Australia?",
    options: {
      A: "Sydney",
      B: "Melbourne",
      C: "Canberra",
      D: "Perth"
    },
    correctAnswer: "C"
  },
  {
    question: "Which planet is known for having the most visible rings?",
    options: {
      A: "Mars",
      B: "Saturn",
      C: "Venus",
      D: "Mercury"
    },
    correctAnswer: "B"
  },
  {
    question: "Which country has more people?",
    options: {
      A: "India",
      B: "Russia",
      C: "Mexico",
      D: "France"
    },
    correctAnswer: "A"
  }
];

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

  if (screenName === "chat") chatContainer.classList.remove("hidden");
  if (screenName === "sorting") sortingScreen.classList.remove("hidden");
  if (screenName === "quiz") quizScreen.classList.remove("hidden");
}

function showGameMenu() {
  queueBotReplies([
    "Hello! Welcome to GameBot.",
    "Available games: quiz, number sorting.",
    "Type the name of the game you want to play."
  ]);
}

function showAvailableGamesAgain() {
  queueBotReplies([
    "That game is not available right now.",
    "Available games: quiz, number sorting.",
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
    "Available games: quiz, number sorting.",
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

function startQuizGame() {
  clearBotQueue();

  mode = "quiz";
  currentQuestionIndex = 0;
  quizScore = 0;
  quizAnswers = [];
  quizLocked = false;

  quizMainCard.classList.remove("hidden");
  quizResults.classList.add("hidden");
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";

  showOnlyScreen("quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  quizProgress.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
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

  const currentQuestion = quizQuestions[currentQuestionIndex];
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

  if (currentQuestionIndex < quizQuestions.length) {
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  quizMainCard.classList.add("hidden");
  quizResults.classList.remove("hidden");

  quizFinalTitle.textContent = "Quiz Completed";
  quizFinalScore.textContent = `${quizScore} / ${quizQuestions.length}`;
  quizRankingText.textContent = getRankingMessage(quizScore, quizQuestions.length);

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
    "Available games: quiz, number sorting.",
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