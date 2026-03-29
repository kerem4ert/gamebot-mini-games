const chatContainer = document.getElementById("chatContainer");
const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const soundToggleButton = document.getElementById("soundToggleButton");

const totalPlaysValue = document.getElementById("totalPlaysValue");
const achievementCountValue = document.getElementById("achievementCountValue");
const bestBlockValue = document.getElementById("bestBlockValue");

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
const sortingWinsValue = document.getElementById("sortingWinsValue");
const sortingBestRangeValue = document.getElementById("sortingBestRangeValue");

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
const quizCategoryBadge = document.getElementById("quizCategoryBadge");
const quizSetTitle = document.getElementById("quizSetTitle");
const quizBestMeta = document.getElementById("quizBestMeta");
const closeQuizGameButton = document.getElementById("closeQuizGameButton");
const restartQuizButton = document.getElementById("restartQuizButton");

const blockPuzzleScreen = document.getElementById("blockPuzzleScreen");
const blockBoard = document.getElementById("blockBoard");
const blockPiecesRow = document.getElementById("blockPiecesRow");
const blockPuzzleScore = document.getElementById("blockPuzzleScore");
const blockPuzzleBestScore = document.getElementById("blockPuzzleBestScore");
const blockPuzzleStatus = document.getElementById("blockPuzzleStatus");
const blockTotalClearsValue = document.getElementById("blockTotalClearsValue");
const closeBlockPuzzleButton = document.getElementById("closeBlockPuzzleButton");
const restartBlockPuzzleButton = document.getElementById("restartBlockPuzzleButton");

/* Quiz bank: 12 separate prepared tests */
const quizTestBank = [
  {
    id: "mixed_1",
    category: "mixed",
    title: "World Basics I",
    questions: [
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
        question: "Which country has the larger population?",
        options: { A: "Germany", B: "Brazil", C: "Japan", D: "Canada" },
        correctAnswer: "B"
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
    ]
  },
  {
    id: "mixed_2",
    category: "mixed",
    title: "World Basics II",
    questions: [
      {
        question: "Which country is famous for the Eiffel Tower?",
        options: { A: "Italy", B: "Spain", C: "France", D: "Belgium" },
        correctAnswer: "C"
      },
      {
        question: "What is the largest mammal in the world?",
        options: { A: "Elephant", B: "Blue Whale", C: "Giraffe", D: "Hippopotamus" },
        correctAnswer: "B"
      },
      {
        question: "Which number comes after 99?",
        options: { A: "100", B: "101", C: "98", D: "110" },
        correctAnswer: "A"
      },
      {
        question: "Which instrument has black and white keys?",
        options: { A: "Guitar", B: "Drum", C: "Piano", D: "Violin" },
        correctAnswer: "C"
      },
      {
        question: "Which bird is often associated with peace?",
        options: { A: "Eagle", B: "Crow", C: "Dove", D: "Falcon" },
        correctAnswer: "C"
      }
    ]
  },
  {
    id: "mixed_3",
    category: "mixed",
    title: "Everyday Knowledge",
    questions: [
      {
        question: "How many continents are there on Earth?",
        options: { A: "5", B: "6", C: "7", D: "8" },
        correctAnswer: "C"
      },
      {
        question: "Which shape has three sides?",
        options: { A: "Square", B: "Circle", C: "Triangle", D: "Rectangle" },
        correctAnswer: "C"
      },
      {
        question: "How many hours are there in one day?",
        options: { A: "12", B: "18", C: "24", D: "36" },
        correctAnswer: "C"
      },
      {
        question: "Which animal can live both on land and in water?",
        options: { A: "Frog", B: "Eagle", C: "Camel", D: "Shark" },
        correctAnswer: "A"
      },
      {
        question: "Which device is mainly used to call people?",
        options: { A: "Microwave", B: "Telephone", C: "Toaster", D: "Printer" },
        correctAnswer: "B"
      }
    ]
  },
  {
    id: "mixed_4",
    category: "mixed",
    title: "General Facts",
    questions: [
      {
        question: "Which famous structure is in India?",
        options: { A: "Colosseum", B: "Taj Mahal", C: "Big Ben", D: "Statue of Liberty" },
        correctAnswer: "B"
      },
      {
        question: "Which fruit is yellow and curved?",
        options: { A: "Apple", B: "Banana", C: "Pear", D: "Cherry" },
        correctAnswer: "B"
      },
      {
        question: "Which animal is famous for carrying its house on its back?",
        options: { A: "Snail", B: "Rabbit", C: "Cat", D: "Fox" },
        correctAnswer: "A"
      },
      {
        question: "Which season comes after summer?",
        options: { A: "Spring", B: "Winter", C: "Autumn", D: "Monsoon" },
        correctAnswer: "C"
      },
      {
        question: "Which body part is used for hearing?",
        options: { A: "Eye", B: "Ear", C: "Nose", D: "Hand" },
        correctAnswer: "B"
      }
    ]
  },
  {
    id: "science_1",
    category: "science",
    title: "Science Set I",
    questions: [
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: { A: "Oxygen", B: "Nitrogen", C: "Carbon Dioxide", D: "Hydrogen" },
        correctAnswer: "C"
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: { A: "50°C", B: "75°C", C: "90°C", D: "100°C" },
        correctAnswer: "D"
      },
      {
        question: "Which star is at the center of our solar system?",
        options: { A: "Polaris", B: "Sirius", C: "The Sun", D: "Mars" },
        correctAnswer: "C"
      },
      {
        question: "Which metal is liquid at room temperature?",
        options: { A: "Iron", B: "Mercury", C: "Silver", D: "Aluminum" },
        correctAnswer: "B"
      },
      {
        question: "Which organ pumps blood through the body?",
        options: { A: "Liver", B: "Lung", C: "Heart", D: "Kidney" },
        correctAnswer: "C"
      }
    ]
  },
  {
    id: "science_2",
    category: "science",
    title: "Science Set II",
    questions: [
      {
        question: "Which is the smallest prime number?",
        options: { A: "0", B: "1", C: "2", D: "3" },
        correctAnswer: "C"
      },
      {
        question: "Which planet is closest to the Sun?",
        options: { A: "Mercury", B: "Venus", C: "Earth", D: "Mars" },
        correctAnswer: "A"
      },
      {
        question: "What is 12 × 12?",
        options: { A: "124", B: "122", C: "144", D: "132" },
        correctAnswer: "C"
      },
      {
        question: "What is the freezing point of water?",
        options: { A: "0°C", B: "10°C", C: "32°C", D: "100°C" },
        correctAnswer: "A"
      },
      {
        question: "Which classroom subject usually involves experiments?",
        options: { A: "Science", B: "History", C: "Literature", D: "Art" },
        correctAnswer: "A"
      }
    ]
  },
  {
    id: "science_3",
    category: "science",
    title: "Science Set III",
    questions: [
      {
        question: "Which body part helps you smell?",
        options: { A: "Ear", B: "Eye", C: "Nose", D: "Foot" },
        correctAnswer: "C"
      },
      {
        question: "Which color do you get by mixing red and blue?",
        options: { A: "Green", B: "Purple", C: "Orange", D: "Brown" },
        correctAnswer: "B"
      },
      {
        question: "Which part of the plant usually grows underground?",
        options: { A: "Leaf", B: "Flower", C: "Root", D: "Fruit" },
        correctAnswer: "C"
      },
      {
        question: "Which is the fastest land animal?",
        options: { A: "Cheetah", B: "Horse", C: "Leopard", D: "Wolf" },
        correctAnswer: "A"
      },
      {
        question: "Which is the largest planet in our solar system?",
        options: { A: "Earth", B: "Mars", C: "Jupiter", D: "Neptune" },
        correctAnswer: "C"
      }
    ]
  },
  {
    id: "science_4",
    category: "science",
    title: "Science Set IV",
    questions: [
      {
        question: "Which planet is called the Red Planet?",
        options: { A: "Mars", B: "Venus", C: "Saturn", D: "Uranus" },
        correctAnswer: "A"
      },
      {
        question: "Which animal is known as the king of the jungle?",
        options: { A: "Tiger", B: "Lion", C: "Elephant", D: "Wolf" },
        correctAnswer: "B"
      },
      {
        question: "What do bees primarily make?",
        options: { A: "Milk", B: "Honey", C: "Wax paper", D: "Silk" },
        correctAnswer: "B"
      },
      {
        question: "How many days are there in a leap year?",
        options: { A: "365", B: "366", C: "364", D: "367" },
        correctAnswer: "B"
      },
      {
        question: "Which month has the fewest days?",
        options: { A: "January", B: "February", C: "April", D: "June" },
        correctAnswer: "B"
      }
    ]
  },
  {
    id: "geography_1",
    category: "geography",
    title: "Geography Set I",
    questions: [
      {
        question: "Which country is home to the city of Tokyo?",
        options: { A: "China", B: "South Korea", C: "Japan", D: "Thailand" },
        correctAnswer: "C"
      },
      {
        question: "Which country is famous for the pyramids?",
        options: { A: "Mexico", B: "Egypt", C: "Greece", D: "Peru" },
        correctAnswer: "B"
      },
      {
        question: "Which language is primarily spoken in Brazil?",
        options: { A: "Spanish", B: "Portuguese", C: "French", D: "English" },
        correctAnswer: "B"
      },
      {
        question: "Which continent is Egypt located in?",
        options: { A: "Asia", B: "Europe", C: "South America", D: "Africa" },
        correctAnswer: "D"
      },
      {
        question: "Which country has Rome as its capital?",
        options: { A: "Portugal", B: "Italy", C: "Austria", D: "Hungary" },
        correctAnswer: "B"
      }
    ]
  },
  {
    id: "geography_2",
    category: "geography",
    title: "Geography Set II",
    questions: [
      {
        question: "Which country is famous for sushi?",
        options: { A: "Japan", B: "India", C: "Turkey", D: "Canada" },
        correctAnswer: "A"
      },
      {
        question: "Which country has maple leaf on its flag?",
        options: { A: "Canada", B: "Sweden", C: "Norway", D: "Finland" },
        correctAnswer: "A"
      },
      {
        question: "Which country is Madrid the capital of?",
        options: { A: "Spain", B: "France", C: "Italy", D: "Portugal" },
        correctAnswer: "A"
      },
      {
        question: "Which is the largest desert in the world?",
        options: { A: "Sahara", B: "Gobi", C: "Antarctic Desert", D: "Arabian Desert" },
        correctAnswer: "C"
      },
      {
        question: "Which is the longest river in the world in many school quizzes?",
        options: { A: "Amazon", B: "Nile", C: "Danube", D: "Yangtze" },
        correctAnswer: "B"
      }
    ]
  },
  {
    id: "geography_3",
    category: "geography",
    title: "Geography Set III",
    questions: [
      {
        question: "Which country is known for the Eiffel Tower?",
        options: { A: "Italy", B: "Spain", C: "France", D: "Belgium" },
        correctAnswer: "C"
      },
      {
        question: "Which city is the capital of Australia?",
        options: { A: "Sydney", B: "Melbourne", C: "Canberra", D: "Perth" },
        correctAnswer: "C"
      },
      {
        question: "Which country has more people?",
        options: { A: "India", B: "Russia", C: "Mexico", D: "France" },
        correctAnswer: "A"
      },
      {
        question: "Which country is home to the Taj Mahal?",
        options: { A: "India", B: "Pakistan", C: "Nepal", D: "Bangladesh" },
        correctAnswer: "A"
      },
      {
        question: "Which ocean lies between Africa, Asia, and Australia?",
        options: { A: "Atlantic Ocean", B: "Indian Ocean", C: "Pacific Ocean", D: "Southern Ocean" },
        correctAnswer: "B"
      }
    ]
  },
  {
    id: "geography_4",
    category: "geography",
    title: "Geography Set IV",
    questions: [
      {
        question: "Which country has Ottawa as its capital?",
        options: { A: "Canada", B: "Australia", C: "United States", D: "Ireland" },
        correctAnswer: "A"
      },
      {
        question: "Which continent is Brazil in?",
        options: { A: "Europe", B: "Africa", C: "South America", D: "Asia" },
        correctAnswer: "C"
      },
      {
        question: "Which is the smallest continent by land area?",
        options: { A: "Europe", B: "Australia", C: "South America", D: "Antarctica" },
        correctAnswer: "B"
      },
      {
        question: "Which country has Ankara as its capital?",
        options: { A: "Türkiye", B: "Greece", C: "Romania", D: "Bulgaria" },
        correctAnswer: "A"
      },
      {
        question: "Which country has Lisbon as its capital?",
        options: { A: "Spain", B: "Portugal", C: "Italy", D: "Croatia" },
        correctAnswer: "B"
      }
    ]
  }
];

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

const ACHIEVEMENTS = [
  { id: "first_play", title: "First Move", text: "Played a game for the first time." },
  { id: "quiz_first", title: "Quiz Starter", text: "Completed your first quiz." },
  { id: "quiz_perfect", title: "Perfect Mind", text: "Scored 5 / 5 in a quiz." },
  { id: "sorting_first_win", title: "Sorting Winner", text: "Won Number Sorting for the first time." },
  { id: "sorting_range_100", title: "Range Master", text: "Won Number Sorting on 1 - 100." },
  { id: "block_100", title: "Block Builder", text: "Reached 100 points in Block Puzzle." },
  { id: "block_300", title: "Puzzle Expert", text: "Reached 300 points in Block Puzzle." },
  { id: "all_rounder", title: "All-Rounder", text: "Played all three games." }
];

const STORAGE_KEY = "gamebot_v3_data";
const BLOCK_BOARD_SIZE = 8;

let appData = getInitialAppData();
let mode = "menu";
let botQueue = Promise.resolve();
let botIsBusy = false;
let botSessionId = 0;
let chatContext = "main";
let audioContext = null;

/* Sorting state */
let sortingValues = Array(10).fill(null);
let sortingCurrentNumber = null;
let sortingGameOver = false;
let sortingSelectedRange = null;
let sortingAvailableNumbers = [];
let sortingDragState = {
  active: false,
  ghost: null,
  targetIndex: null
};

/* Quiz state */
let activeQuizQuestions = [];
let activeQuizCategory = "mixed";
let activeQuizTitle = "";
let currentQuestionIndex = 0;
let quizScore = 0;
let quizAnswers = [];
let quizLocked = false;

/* Block puzzle state */
let blockBoardState = [];
let blockCurrentPieces = [];
let blockGameOver = false;
let blockScore = 0;
let blockDragState = {
  active: false,
  pieceIndex: null,
  ghost: null,
  hoverRow: null,
  hoverCol: null,
  sourceCard: null
};

/* ---------- Storage / Stats ---------- */

function getInitialAppData() {
  return {
    settings: {
      soundEnabled: true
    },
    stats: {
      totalPlays: 0,
      gamesPlayed: {
        quiz: 0,
        sorting: 0,
        block: 0
      },
      quiz: {
        plays: 0,
        bestScore: 0,
        perfects: 0,
        byCategory: {
          mixed: 0,
          science: 0,
          geography: 0
        }
      },
      sorting: {
        plays: 0,
        wins: 0,
        bestRangeWon: 0
      },
      block: {
        plays: 0,
        bestScore: 0,
        totalLinesCleared: 0
      }
    },
    achievements: []
  };
}

function loadAppData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    appData = {
      ...getInitialAppData(),
      ...parsed,
      settings: {
        ...getInitialAppData().settings,
        ...(parsed.settings || {})
      },
      stats: {
        ...getInitialAppData().stats,
        ...(parsed.stats || {}),
        gamesPlayed: {
          ...getInitialAppData().stats.gamesPlayed,
          ...((parsed.stats && parsed.stats.gamesPlayed) || {})
        },
        quiz: {
          ...getInitialAppData().stats.quiz,
          ...((parsed.stats && parsed.stats.quiz) || {}),
          byCategory: {
            ...getInitialAppData().stats.quiz.byCategory,
            ...(((parsed.stats && parsed.stats.quiz && parsed.stats.quiz.byCategory) || {}))
          }
        },
        sorting: {
          ...getInitialAppData().stats.sorting,
          ...((parsed.stats && parsed.stats.sorting) || {})
        },
        block: {
          ...getInitialAppData().stats.block,
          ...((parsed.stats && parsed.stats.block) || {})
        }
      },
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements : []
    };
  } catch (error) {
    appData = getInitialAppData();
  }
}

function saveAppData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function updateHeaderStats() {
  totalPlaysValue.textContent = appData.stats.totalPlays;
  achievementCountValue.textContent = appData.achievements.length;
  bestBlockValue.textContent = appData.stats.block.bestScore;
  sortingWinsValue.textContent = appData.stats.sorting.wins;
  sortingBestRangeValue.textContent = appData.stats.sorting.bestRangeWon || "-";
  blockPuzzleBestScore.textContent = appData.stats.block.bestScore;
  blockTotalClearsValue.textContent = appData.stats.block.totalLinesCleared;
  quizBestMeta.textContent = `Best score: ${appData.stats.quiz.bestScore} / 5 • Plays: ${appData.stats.quiz.plays}`;
  soundToggleButton.textContent = appData.settings.soundEnabled ? "🔊" : "🔇";
}

function recordGamePlay(gameKey) {
  appData.stats.totalPlays += 1;
  appData.stats.gamesPlayed[gameKey] += 1;
  appData.stats[gameKey].plays += 1;
  saveAppData();
  updateHeaderStats();
  unlockAchievement("first_play");
  maybeUnlockAllRounder();
}

function unlockAchievement(id) {
  if (appData.achievements.includes(id)) return;

  const achievement = ACHIEVEMENTS.find((item) => item.id === id);
  if (!achievement) return;

  appData.achievements.push(id);
  saveAppData();
  updateHeaderStats();
  playSound("achievement");

  queueBotReplies([
    `🏆 Achievement unlocked: ${achievement.title}`,
    achievement.text
  ]);
}

function maybeUnlockAllRounder() {
  const played = appData.stats.gamesPlayed;
  if (played.quiz > 0 && played.sorting > 0 && played.block > 0) {
    unlockAchievement("all_rounder");
  }
}

/* ---------- Audio ---------- */

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playTone(frequency, duration = 0.12, type = "sine", volume = 0.03, whenOffset = 0) {
  if (!appData.settings.soundEnabled) return;

  ensureAudioContext();

  const startTime = audioContext.currentTime + whenOffset;
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gainNode.gain.setValueAtTime(volume, startTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

function playSound(kind) {
  if (!appData.settings.soundEnabled) return;

  switch (kind) {
    case "correct":
      playTone(680, 0.08, "triangle", 0.04, 0);
      playTone(860, 0.12, "triangle", 0.03, 0.05);
      break;
    case "wrong":
      playTone(220, 0.12, "sawtooth", 0.035, 0);
      playTone(170, 0.14, "sawtooth", 0.03, 0.07);
      break;
    case "win":
      playTone(520, 0.09, "triangle", 0.04, 0);
      playTone(660, 0.11, "triangle", 0.035, 0.06);
      playTone(830, 0.13, "triangle", 0.03, 0.12);
      break;
    case "line":
      playTone(700, 0.08, "square", 0.03, 0);
      playTone(950, 0.1, "square", 0.025, 0.05);
      break;
    case "place":
      playTone(450, 0.07, "triangle", 0.025, 0);
      break;
    case "drag":
      playTone(500, 0.04, "sine", 0.015, 0);
      break;
    case "achievement":
      playTone(620, 0.08, "triangle", 0.035, 0);
      playTone(820, 0.1, "triangle", 0.03, 0.05);
      playTone(1040, 0.12, "triangle", 0.025, 0.11);
      break;
    default:
      break;
  }
}

/* ---------- Utilities ---------- */

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
  messageInput.placeholder = botIsBusy ? "Bot is typing..." : "Type your message...";
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function calculateTypingDelay(text) {
  const cleanText = text.trim();
  const wordCount = cleanText === "" ? 0 : cleanText.split(/\s+/).length;
  const perWordDelay = 110;
  const baseDelay = 450;
  const minDelay = 800;
  const maxDelay = 2400;
  const calculatedDelay = baseDelay + wordCount * perWordDelay;
  return Math.min(Math.max(calculatedDelay, minDelay), maxDelay);
}

function pulseElement(element) {
  element.classList.remove("pulse");
  void element.offsetWidth;
  element.classList.add("pulse");
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getSortingBoxSize() {
  const firstBox = sortingBoard.querySelector(".sorting-box");
  if (!firstBox) {
    return window.innerWidth <= 700 ? 52 : 60;
  }
  return Math.round(firstBox.getBoundingClientRect().width);
}

function getBlockBoardCellSize() {
  const firstCell = blockBoard.querySelector(".block-cell");
  if (!firstCell) {
    return window.innerWidth <= 700 ? 28 : 42;
  }
  return Math.round(firstCell.getBoundingClientRect().width);
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

function addMessage(text, sender, extraClass = "") {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  if (extraClass) messageDiv.classList.add(extraClass);

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

  return messageDiv;
}

function addOptionMessage(text, options) {
  const wrapper = addMessage(text, "bot", "option-message");
  const group = document.createElement("div");
  group.classList.add("chat-option-group");

  options.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("chat-option-button");
    if (option.variant === "secondary") {
      button.classList.add("secondary");
    }
    button.type = "button";
    button.textContent = option.label;
    button.addEventListener("click", () => handleChatAction(option.action));
    group.appendChild(button);
  });

  wrapper.insertBefore(group, wrapper.querySelector(".message-time"));
  scrollToBottom();
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
  await wait(220);
}

async function botOptionReply(text, options, sessionId) {
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
  addOptionMessage(text, options);
  await wait(220);
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

function queueBotOptions(text, options) {
  const sessionId = botSessionId;

  botQueue = botQueue
    .then(() => botOptionReply(text, options, sessionId))
    .finally(() => {
      if (sessionId === botSessionId) {
        botIsBusy = false;
        updateInputState();
        messageInput.focus();
      }
    });

  return botQueue;
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

/* ---------- Chat Menus ---------- */

function showMainMenu(isFirstLoad = false) {
  chatContext = "main";
  showOnlyScreen("chat");

  if (isFirstLoad) {
    queueBotReplies([
      "Hello! Welcome to GameBot.",
      "I can chat a little and I can also launch games for you.",
      "You can tap a game below or type something like quiz, block puzzle, random game, easy game, or hard game."
    ]);
  } else {
    queueBotReply("What would you like to play next?");
  }

  queueBotOptions("Choose a game:", [
    { label: "Quiz", action: "menu_quiz" },
    { label: "Number Sorting", action: "menu_sorting" },
    { label: "Block Puzzle", action: "menu_block" },
    { label: "Random Game", action: "menu_random", variant: "secondary" }
  ]);
}

function showQuizCategoryMenu() {
  chatContext = "quizCategory";
  queueBotOptions("Choose a quiz category:", [
    { label: "Mixed", action: "quiz_mixed" },
    { label: "Science", action: "quiz_science" },
    { label: "Geography", action: "quiz_geography" },
    { label: "Random Category", action: "quiz_random_category", variant: "secondary" }
  ]);
}

function handleChatAction(action) {
  if (action === "menu_quiz") {
    clearBotQueue();
    showOnlyScreen("chat");
    showQuizCategoryMenu();
    return;
  }

  if (action === "menu_sorting") {
    openSortingSetupScreen();
    return;
  }

  if (action === "menu_block") {
    startBlockPuzzleGame();
    return;
  }

  if (action === "menu_random") {
    launchRandomGame();
    return;
  }

  if (action === "quiz_mixed") {
    startQuizGame("mixed");
    return;
  }

  if (action === "quiz_science") {
    startQuizGame("science");
    return;
  }

  if (action === "quiz_geography") {
    startQuizGame("geography");
    return;
  }

  if (action === "quiz_random_category") {
    const randomCategory = ["mixed", "science", "geography"][
      Math.floor(Math.random() * 3)
    ];
    startQuizGame(randomCategory);
  }
}

function launchRandomGame() {
  const games = ["quiz", "sorting", "block"];
  const randomGame = games[Math.floor(Math.random() * games.length)];

  if (randomGame === "quiz") {
    startQuizGame(["mixed", "science", "geography"][Math.floor(Math.random() * 3)]);
  } else if (randomGame === "sorting") {
    openSortingSetupScreen();
  } else {
    startBlockPuzzleGame();
  }
}

function handleSmallTalk(text) {
  const normalized = normalizeText(text);

  if (/^(hi|hello|hey|good morning|good afternoon|good evening)$/.test(normalized)) {
    clearBotQueue();
    queueBotReply("Hello! I'm doing well and I'm ready to play.");
    showMainMenu();
    return true;
  }

  if (normalized.includes("how are you")) {
    clearBotQueue();
    queueBotReply("I'm doing great. Thanks for asking! I'm ready for a game whenever you are.");
    showMainMenu();
    return true;
  }

  if (normalized === "thanks" || normalized === "thank you" || normalized === "thx") {
    clearBotQueue();
    queueBotReply("You're welcome!");
    showMainMenu();
    return true;
  }

  if (
    normalized.includes("who are you") ||
    normalized.includes("what are you") ||
    normalized.includes("what can you do")
  ) {
    clearBotQueue();
    queueBotReplies([
      "I'm GameBot.",
      "I can chat a little, guide you through the menu, and launch Quiz, Number Sorting, or Block Puzzle."
    ]);
    showMainMenu();
    return true;
  }

  if (normalized === "help" || normalized.includes("help me")) {
    clearBotQueue();
    queueBotReplies([
      "Here are a few things you can say:",
      "quiz, number sorting, block puzzle, random game, easy game, hard game"
    ]);
    showMainMenu();
    return true;
  }

  return false;
}

function handleBotSmartSelection(userText) {
  const text = normalizeText(userText);

  if (text.includes("random")) {
    launchRandomGame();
    return true;
  }

  if (text.includes("easy")) {
    clearBotQueue();
    queueBotOptions("Here are easier choices:", [
      { label: "Quiz - Mixed", action: "quiz_mixed" },
      { label: "Number Sorting", action: "menu_sorting" }
    ]);
    return true;
  }

  if (text.includes("hard")) {
    clearBotQueue();
    queueBotOptions("Here are harder choices:", [
      { label: "Block Puzzle", action: "menu_block" },
      { label: "Quiz - Science", action: "quiz_science" }
    ]);
    return true;
  }

  return false;
}

/* ---------- Sorting Game ---------- */

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
    box.classList.add("sorting-box", "empty");
    box.dataset.index = i;

    const label = document.createElement("div");
    label.classList.add("box-label");
    label.textContent = `${i + 1}`;

    const value = document.createElement("div");
    value.classList.add("box-value");
    value.textContent = "";

    box.appendChild(label);
    box.appendChild(value);
    sortingBoard.appendChild(box);
  }
}

function renderSortingBoard() {
  [...sortingBoard.children].forEach((box, index) => {
    const valueElement = box.querySelector(".box-value");
    const currentValue = sortingValues[index];

    box.classList.remove("filled", "lose", "win", "drag-valid", "drag-invalid");
    box.classList.add("empty");

    if (currentValue === null) {
      valueElement.textContent = "";
    } else {
      valueElement.textContent = currentValue;
      box.classList.add("filled");
      box.classList.remove("empty");
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
  pulseElement(currentNumberCard);
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
    playSound("wrong");

    queueBotReplies([
      `Game over. ${value} breaks the ascending order.`,
      "That number does not fit correctly in the full sequence.",
      "Press Restart to try again or X to return to the chat."
    ]);
    return;
  }

  playSound("place");

  const filledCount = sortingValues.filter((item) => item !== null).length;

  if (filledCount === 10) {
    sortingGameOver = true;
    sortingCurrentNumber = null;
    updateSortingCard();

    [...sortingBoard.children].forEach((box) => box.classList.add("win"));

    appData.stats.sorting.wins += 1;
    appData.stats.sorting.bestRangeWon = Math.max(appData.stats.sorting.bestRangeWon, sortingSelectedRange);
    saveAppData();
    updateHeaderStats();
    unlockAchievement("sorting_first_win");

    if (sortingSelectedRange === 100) {
      unlockAchievement("sorting_range_100");
    }

    playSound("win");

    queueBotReplies([
      "Amazing! You placed all 10 numbers correctly.",
      "You win the number sorting game.",
      "Press Restart to play again or X to return to the chat."
    ]);
    return;
  }

  generateNextSortingNumber();
}

function createSortingGhost(value) {
  const size = getSortingBoxSize();

  const ghost = document.createElement("div");
  ghost.classList.add("drag-ghost");
  ghost.style.width = `${size}px`;
  ghost.style.height = `${size}px`;
  ghost.style.borderRadius = `${Math.max(12, Math.round(size * 0.22))}px`;
  ghost.style.background = "linear-gradient(135deg, #f59e0b, #ef4444)";
  ghost.style.color = "white";
  ghost.style.display = "flex";
  ghost.style.alignItems = "center";
  ghost.style.justifyContent = "center";
  ghost.style.fontWeight = "bold";
  ghost.style.fontSize = `${Math.max(18, Math.round(size * 0.34))}px`;
  ghost.style.boxShadow = "0 16px 28px rgba(239, 68, 68, 0.25)";
  ghost.textContent = value;

  return ghost;
}

function startSortingDrag(clientX, clientY) {
  if (sortingGameOver || sortingCurrentNumber === null) return;

  sortingDragState.active = true;
  sortingDragState.targetIndex = null;

  const ghost = createSortingGhost(sortingCurrentNumber);
  document.body.appendChild(ghost);
  sortingDragState.ghost = ghost;

  updateSortingDrag(clientX, clientY);
  playSound("drag");
}

function updateSortingDrag(clientX, clientY) {
  if (!sortingDragState.active || !sortingDragState.ghost) return;

  sortingDragState.ghost.style.left = `${clientX}px`;
  sortingDragState.ghost.style.top = `${clientY}px`;

  [...sortingBoard.children].forEach((box) => {
    box.classList.remove("drag-valid", "drag-invalid");
  });

  const element = document.elementFromPoint(clientX, clientY);
  const targetBox = element ? element.closest(".sorting-box") : null;

  sortingDragState.targetIndex = null;

  if (!targetBox) return;

  const index = Number(targetBox.dataset.index);
  sortingDragState.targetIndex = index;

  if (sortingValues[index] !== null) {
    targetBox.classList.add("drag-invalid");
    return;
  }

  const valid = isPlacementValid(index, sortingCurrentNumber);
  targetBox.classList.add(valid ? "drag-valid" : "drag-invalid");
}

function endSortingDrag() {
  if (!sortingDragState.active) return;

  if (sortingDragState.ghost) {
    sortingDragState.ghost.remove();
  }

  [...sortingBoard.children].forEach((box) => {
    box.classList.remove("drag-valid", "drag-invalid");
  });

  if (
    sortingDragState.targetIndex !== null &&
    sortingValues[sortingDragState.targetIndex] === null &&
    sortingCurrentNumber !== null
  ) {
    placeSortingNumber(sortingDragState.targetIndex);
  }

  sortingDragState = {
    active: false,
    ghost: null,
    targetIndex: null
  };
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

  recordGamePlay("sorting");

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
  mode = "menu";
  showMainMenu();
}

/* ---------- Quiz Game ---------- */

function getRankingMessage(score, total) {
  if (score === total) return "Outstanding performance. You are in the top 10% of players.";
  if (score === total - 1) return "Excellent result. You are in the top 20% of players.";
  if (score === 3) return "Great effort. You are in the top 35% of players.";
  if (score === 2) return "Nice try. You are in the top 50% of players.";
  return "Good start. Keep practicing and come back stronger for the next test.";
}

function getRandomQuizSet(category) {
  const matchingSets = quizTestBank.filter((set) => set.category === category);
  const randomSet = matchingSets[Math.floor(Math.random() * matchingSets.length)];
  return {
    ...randomSet,
    questions: randomSet.questions.map((item) => ({
      question: item.question,
      options: { ...item.options },
      correctAnswer: item.correctAnswer
    }))
  };
}

function startQuizGame(category = "mixed") {
  clearBotQueue();

  const selectedSet = getRandomQuizSet(category);

  mode = "quiz";
  chatContext = "main";
  currentQuestionIndex = 0;
  quizScore = 0;
  quizAnswers = [];
  quizLocked = false;
  activeQuizCategory = category;
  activeQuizTitle = selectedSet.title;
  activeQuizQuestions = selectedSet.questions;

  recordGamePlay("quiz");
  appData.stats.quiz.byCategory[category] += 1;
  saveAppData();
  updateHeaderStats();

  quizMainCard.classList.remove("hidden");
  quizResults.classList.add("hidden");
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";

  quizCategoryBadge.textContent = capitalize(category);
  quizSetTitle.textContent = activeQuizTitle;

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
    playSound("correct");
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
    playSound("wrong");
  }

  quizAnswers.push({
    question: currentQuestion.question,
    options: currentQuestion.options,
    selectedAnswer: selectedLetter,
    correctAnswer: correctLetter
  });

  await wait(1050);

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

  appData.stats.quiz.bestScore = Math.max(appData.stats.quiz.bestScore, quizScore);
  if (quizScore === activeQuizQuestions.length) {
    appData.stats.quiz.perfects += 1;
    unlockAchievement("quiz_perfect");
  }
  unlockAchievement("quiz_first");
  saveAppData();
  updateHeaderStats();

  quizFinalTitle.textContent = "Quiz Completed";
  quizFinalScore.textContent = `${quizScore} / ${activeQuizQuestions.length}`;
  quizRankingText.textContent = getRankingMessage(quizScore, activeQuizQuestions.length);
  quizBestMeta.textContent = `Best score: ${appData.stats.quiz.bestScore} / 5 • Plays: ${appData.stats.quiz.plays}`;

  if (quizScore >= 4) {
    playSound("win");
  }

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
    badge.textContent =
      item.selectedAnswer === item.correctAnswer
        ? `Your answer: ${item.selectedAnswer} • Correct`
        : `Your answer: ${item.selectedAnswer} • Correct answer: ${item.correctAnswer}`;

    reviewCard.appendChild(reviewOptions);
    reviewCard.appendChild(badge);
    quizReviewList.appendChild(reviewCard);
  });
}

function restartQuizGame() {
  clearBotQueue();
  startQuizGame(activeQuizCategory);
}

function closeQuizGame() {
  clearBotQueue();
  mode = "menu";
  showMainMenu();
}

/* ---------- Block Puzzle ---------- */

function createEmptyBlockBoard() {
  return Array.from({ length: BLOCK_BOARD_SIZE }, () =>
    Array(BLOCK_BOARD_SIZE).fill(0)
  );
}

function updateBlockPuzzleScore() {
  blockPuzzleScore.textContent = blockScore;
  pulseElement(blockPuzzleScore);
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

function getRandomPlayableBlockShape() {
  const shuffledShapes = [...blockShapes].sort(() => Math.random() - 0.5);

  for (const shape of shuffledShapes) {
    if (canShapeFitAnywhere(shape)) {
      return shape.map((row) => [...row]);
    }
  }

  return null;
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
  renderBlockPieces();
}

function renderSingleBlockPiece(shape, isGhost = false, cellSize = null) {
  const rows = shape.length;
  const cols = shape[0].length;
  const size = cellSize || (window.innerWidth <= 700 ? 18 : 22);
  const gap = Math.max(3, Math.round(size * 0.22));

  const wrapper = document.createElement("div");
  wrapper.classList.add("block-piece-grid");
  wrapper.style.gridTemplateColumns = `repeat(${cols}, ${size}px)`;
  wrapper.style.gridTemplateRows = `repeat(${rows}, ${size}px)`;
  wrapper.style.gap = `${gap}px`;

  shape.forEach((row) => {
    row.forEach((cellValue) => {
      const cell = document.createElement("div");
      cell.classList.add("block-piece-cell");
      cell.style.width = `${size}px`;
      cell.style.height = `${size}px`;
      cell.style.borderRadius = `${Math.max(4, Math.round(size * 0.28))}px`;

      if (cellValue === 1) {
        cell.classList.add("active");
      }

      if (isGhost) {
        cell.style.opacity = cellValue === 1 ? "0.96" : "0.45";
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
    card.dataset.index = index;

    if (piece.used) {
      card.classList.add("used");
    } else {
      card.addEventListener("pointerdown", (event) => {
        startBlockDrag(index, event, card);
      });
    }

    card.appendChild(renderSingleBlockPiece(piece.shape));
    blockPiecesRow.appendChild(card);
  });
}

function previewBlockPlacement(startRow, startCol, shape) {
  clearBlockPreview();

  const isValid = canPlaceBlock(shape, startRow, startCol);

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

  return isValid;
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
  clearBlockPreview();
  endBlockDrag(true);

  if (blockScore >= 100) unlockAchievement("block_100");
  if (blockScore >= 300) unlockAchievement("block_300");

  appData.stats.block.bestScore = Math.max(appData.stats.block.bestScore, blockScore);
  saveAppData();
  updateHeaderStats();
  playSound("wrong");

  queueBotReplies([
    `Game over. Your block puzzle score is ${blockScore}.`,
    "There are no more valid moves left for the remaining blocks.",
    "Press Restart to play again or X to return to the chat."
  ]);
}

function tryPlaceDraggedBlock(pieceIndex, row, col) {
  const piece = blockCurrentPieces[pieceIndex];
  if (!piece || piece.used || !canPlaceBlock(piece.shape, row, col)) {
    return false;
  }

  placeBlock(piece.shape, row, col);
  piece.used = true;

  let placedCellCount = 0;
  piece.shape.forEach((shapeRow) => {
    shapeRow.forEach((value) => {
      if (value === 1) placedCellCount++;
    });
  });

  blockScore += placedCellCount;

  const clearedLines = clearCompletedLines();
  if (clearedLines > 0) {
    blockScore += clearedLines * 10;
    appData.stats.block.totalLinesCleared += clearedLines;
    updateBlockPuzzleStatus(`Great move! Cleared ${clearedLines} line${clearedLines > 1 ? "s" : ""}.`);
    playSound("line");
  } else {
    updateBlockPuzzleStatus("Block placed successfully.");
    playSound("place");
  }

  appData.stats.block.bestScore = Math.max(appData.stats.block.bestScore, blockScore);
  saveAppData();
  updateHeaderStats();

  renderBlockBoard();
  renderBlockPieces();
  updateBlockPuzzleScore();
  clearBlockPreview();

  if (blockScore >= 100) unlockAchievement("block_100");
  if (blockScore >= 300) unlockAchievement("block_300");

  if (areAllBlockPiecesUsed()) {
    const nextPieces = generatePlayableBlockPieces();

    if (nextPieces.length === 0) {
      finishBlockPuzzleGame();
      return true;
    }

    blockCurrentPieces = nextPieces;
    renderBlockPieces();
    updateBlockPuzzleStatus("New playable blocks generated.");
    return true;
  }

  if (!hasAnyValidMoveForCurrentPieces()) {
    finishBlockPuzzleGame();
    return true;
  }

  return true;
}

function createBlockGhost(shape) {
  const boardCellSize = getBlockBoardCellSize();
  const ghost = document.createElement("div");
  ghost.classList.add("drag-ghost");
  ghost.appendChild(renderSingleBlockPiece(shape, true, boardCellSize));
  return ghost;
}

function startBlockDrag(pieceIndex, event, sourceCard) {
  if (blockGameOver) return;
  const piece = blockCurrentPieces[pieceIndex];
  if (!piece || piece.used) return;

  event.preventDefault();

  blockDragState.active = true;
  blockDragState.pieceIndex = pieceIndex;
  blockDragState.hoverRow = null;
  blockDragState.hoverCol = null;
  blockDragState.sourceCard = sourceCard;

  sourceCard.classList.add("dragging");

  const ghost = createBlockGhost(piece.shape);
  document.body.appendChild(ghost);
  blockDragState.ghost = ghost;

  updateBlockDrag(event.clientX, event.clientY);
  playSound("drag");
}

function updateBlockDrag(clientX, clientY) {
  if (!blockDragState.active || !blockDragState.ghost) return;

  blockDragState.ghost.style.left = `${clientX}px`;
  blockDragState.ghost.style.top = `${clientY}px`;

  const piece = blockCurrentPieces[blockDragState.pieceIndex];
  if (!piece) return;

  const element = document.elementFromPoint(clientX, clientY);
  const cell = element ? element.closest(".block-cell") : null;

  clearBlockPreview();
  blockDragState.hoverRow = null;
  blockDragState.hoverCol = null;

  if (!cell) return;

  const row = Number(cell.dataset.row);
  const col = Number(cell.dataset.col);

  blockDragState.hoverRow = row;
  blockDragState.hoverCol = col;

  previewBlockPlacement(row, col, piece.shape);
}

function endBlockDrag(forceCleanupOnly = false) {
  if (!blockDragState.active && !forceCleanupOnly) return;

  const {
    pieceIndex,
    hoverRow,
    hoverCol,
    sourceCard,
    ghost
  } = blockDragState;

  if (ghost) ghost.remove();
  if (sourceCard) sourceCard.classList.remove("dragging");

  const shouldTryPlace =
    !forceCleanupOnly &&
    pieceIndex !== null &&
    hoverRow !== null &&
    hoverCol !== null;

  blockDragState = {
    active: false,
    pieceIndex: null,
    ghost: null,
    hoverRow: null,
    hoverCol: null,
    sourceCard: null
  };

  if (shouldTryPlace) {
    tryPlaceDraggedBlock(pieceIndex, hoverRow, hoverCol);
  } else {
    clearBlockPreview();
  }
}

function startBlockPuzzleGame() {
  clearBotQueue();

  mode = "blockPuzzle";
  blockBoardState = createEmptyBlockBoard();
  blockCurrentPieces = [];
  blockGameOver = false;
  blockScore = 0;

  recordGamePlay("block");

  showOnlyScreen("blockPuzzle");
  createBlockBoardUI();
  renderBlockBoard();
  generateBlockPieces();
  updateBlockPuzzleScore();
  updateBlockPuzzleStatus("Drag a block onto the board to begin.");
}

function restartBlockPuzzleGame() {
  clearBotQueue();
  startBlockPuzzleGame();
}

function closeBlockPuzzleGame() {
  clearBotQueue();
  mode = "menu";
  showMainMenu();
}

/* ---------- Input Handling ---------- */

function handleMenuSelection(userMessage) {
  const selectedGame = normalizeText(userMessage);

  if (handleSmallTalk(selectedGame)) {
    return;
  }

  if (handleBotSmartSelection(selectedGame)) {
    return;
  }

  if (selectedGame === "quiz" || selectedGame === "quiz game") {
    clearBotQueue();
    showQuizCategoryMenu();
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
  } else if (
    selectedGame === "mixed" ||
    selectedGame === "science" ||
    selectedGame === "geography"
  ) {
    startQuizGame(selectedGame);
  } else {
    clearBotQueue();
    queueBotReply("I did not fully understand that. Which game would you like to play?");
    showMainMenu();
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

/* ---------- Global Pointer Drag ---------- */

function handleGlobalPointerMove(event) {
  if (sortingDragState.active) {
    updateSortingDrag(event.clientX, event.clientY);
  }

  if (blockDragState.active) {
    updateBlockDrag(event.clientX, event.clientY);
  }
}

function handleGlobalPointerUp() {
  if (sortingDragState.active) {
    endSortingDrag();
  }

  if (blockDragState.active) {
    endBlockDrag();
  }
}

/* ---------- Events ---------- */

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

messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleUserInput();
  }
});

soundToggleButton.addEventListener("click", () => {
  appData.settings.soundEnabled = !appData.settings.soundEnabled;
  saveAppData();
  updateHeaderStats();
  if (appData.settings.soundEnabled) {
    playSound("correct");
  }
});

currentNumberCard.addEventListener("pointerdown", (event) => {
  if (currentNumberCard.classList.contains("disabled")) return;
  event.preventDefault();
  startSortingDrag(event.clientX, event.clientY);
});

document.addEventListener("pointermove", handleGlobalPointerMove);
document.addEventListener("pointerup", handleGlobalPointerUp);
document.addEventListener("pointercancel", handleGlobalPointerUp);

/* ---------- Init ---------- */

loadAppData();
updateHeaderStats();
updateInputState();
showOnlyScreen("chat");
showMainMenu(true);