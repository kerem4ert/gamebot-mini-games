const chatContainer = document.getElementById("chatContainer");
const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const soundToggleButton = document.getElementById("soundToggleButton");
const chatHeaderSubtitle = document.getElementById("chatHeaderSubtitle");

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

const sortingTitle = document.getElementById("sortingTitle");
const sortingDescription = document.getElementById("sortingDescription");
const sortingSetupTitle = document.getElementById("sortingSetupTitle");
const sortingSetupDescription = document.getElementById("sortingSetupDescription");
const sortingPanelLabel = document.getElementById("sortingPanelLabel");
const sortingWinsLabel = document.getElementById("sortingWinsLabel");
const sortingBestRangeLabel = document.getElementById("sortingBestRangeLabel");

const quizTitle = document.getElementById("quizTitle");
const quizDescription = document.getElementById("quizDescription");

const blockTitle = document.getElementById("blockTitle");
const blockDescription = document.getElementById("blockDescription");
const blockScoreLabel = document.getElementById("blockScoreLabel");
const blockBestScoreLabel = document.getElementById("blockBestScoreLabel");
const blockStatusLabel = document.getElementById("blockStatusLabel");
const blockLinesLabel = document.getElementById("blockLinesLabel");
const blockPiecesTitle = document.getElementById("blockPiecesTitle");

/* Quiz bank */
const quizTestBank = [
  {
    id: "mixed_1",
    category: "mixed",
    title: "World Basics I",
    title_tr: "Dünya Bilgisi I",
    questions: [
      {
        question: "Which ocean is the largest on Earth?",
        question_tr: "Dünyadaki en büyük okyanus hangisidir?",
        options: { A: "Atlantic Ocean", B: "Indian Ocean", C: "Pacific Ocean", D: "Arctic Ocean" },
        options_tr: { A: "Atlas Okyanusu", B: "Hint Okyanusu", C: "Pasifik Okyanusu", D: "Arktik Okyanusu" },
        correctAnswer: "C"
      },
      {
        question: "Which city is the capital of Australia?",
        question_tr: "Avustralya'nın başkenti hangi şehirdir?",
        options: { A: "Sydney", B: "Melbourne", C: "Canberra", D: "Perth" },
        options_tr: { A: "Sydney", B: "Melbourne", C: "Canberra", D: "Perth" },
        correctAnswer: "C"
      },
      {
        question: "Which country has the larger population?",
        question_tr: "Hangi ülkenin nüfusu daha fazladır?",
        options: { A: "Germany", B: "Brazil", C: "Japan", D: "Canada" },
        options_tr: { A: "Almanya", B: "Brezilya", C: "Japonya", D: "Kanada" },
        correctAnswer: "B"
      },
      {
        question: "Which planet is known for having the most visible rings?",
        question_tr: "En görünür halkalara sahip gezegen hangisidir?",
        options: { A: "Mars", B: "Saturn", C: "Venus", D: "Mercury" },
        options_tr: { A: "Mars", B: "Satürn", C: "Venüs", D: "Merkür" },
        correctAnswer: "B"
      },
      {
        question: "Which country has more people?",
        question_tr: "Hangi ülkenin nüfusu daha fazladır?",
        options: { A: "India", B: "Russia", C: "Mexico", D: "France" },
        options_tr: { A: "Hindistan", B: "Rusya", C: "Meksika", D: "Fransa" },
        correctAnswer: "A"
      }
    ]
  },
  {
    id: "science_1",
    category: "science",
    title: "Science Set I",
    title_tr: "Bilim Seti I",
    questions: [
      {
        question: "Which gas do plants absorb from the atmosphere?",
        question_tr: "Bitkiler atmosferden hangi gazı alır?",
        options: { A: "Oxygen", B: "Nitrogen", C: "Carbon Dioxide", D: "Hydrogen" },
        options_tr: { A: "Oksijen", B: "Azot", C: "Karbondioksit", D: "Hidrojen" },
        correctAnswer: "C"
      },
      {
        question: "What is the boiling point of water at sea level?",
        question_tr: "Deniz seviyesinde suyun kaynama noktası kaç derecedir?",
        options: { A: "50°C", B: "75°C", C: "90°C", D: "100°C" },
        options_tr: { A: "50°C", B: "75°C", C: "90°C", D: "100°C" },
        correctAnswer: "D"
      },
      {
        question: "Which star is at the center of our solar system?",
        question_tr: "Güneş sistemimizin merkezindeki yıldız hangisidir?",
        options: { A: "Polaris", B: "Sirius", C: "The Sun", D: "Mars" },
        options_tr: { A: "Kutup Yıldızı", B: "Sirius", C: "Güneş", D: "Mars" },
        correctAnswer: "C"
      },
      {
        question: "Which metal is liquid at room temperature?",
        question_tr: "Oda sıcaklığında sıvı olan metal hangisidir?",
        options: { A: "Iron", B: "Mercury", C: "Silver", D: "Aluminum" },
        options_tr: { A: "Demir", B: "Cıva", C: "Gümüş", D: "Alüminyum" },
        correctAnswer: "B"
      },
      {
        question: "Which organ pumps blood through the body?",
        question_tr: "Vücuda kan pompalayan organ hangisidir?",
        options: { A: "Liver", B: "Lung", C: "Heart", D: "Kidney" },
        options_tr: { A: "Karaciğer", B: "Akciğer", C: "Kalp", D: "Böbrek" },
        correctAnswer: "C"
      }
    ]
  },
  {
    id: "geography_1",
    category: "geography",
    title: "Geography Set I",
    title_tr: "Coğrafya Seti I",
    questions: [
      {
        question: "Which country is home to the city of Tokyo?",
        question_tr: "Tokyo hangi ülkededir?",
        options: { A: "China", B: "South Korea", C: "Japan", D: "Thailand" },
        options_tr: { A: "Çin", B: "Güney Kore", C: "Japonya", D: "Tayland" },
        correctAnswer: "C"
      },
      {
        question: "Which country is famous for the pyramids?",
        question_tr: "Piramitleriyle ünlü ülke hangisidir?",
        options: { A: "Mexico", B: "Egypt", C: "Greece", D: "Peru" },
        options_tr: { A: "Meksika", B: "Mısır", C: "Yunanistan", D: "Peru" },
        correctAnswer: "B"
      },
      {
        question: "Which language is primarily spoken in Brazil?",
        question_tr: "Brezilya'da ağırlıklı olarak hangi dil konuşulur?",
        options: { A: "Spanish", B: "Portuguese", C: "French", D: "English" },
        options_tr: { A: "İspanyolca", B: "Portekizce", C: "Fransızca", D: "İngilizce" },
        correctAnswer: "B"
      },
      {
        question: "Which continent is Egypt located in?",
        question_tr: "Mısır hangi kıtadadır?",
        options: { A: "Asia", B: "Europe", C: "South America", D: "Africa" },
        options_tr: { A: "Asya", B: "Avrupa", C: "Güney Amerika", D: "Afrika" },
        correctAnswer: "D"
      },
      {
        question: "Which country has Rome as its capital?",
        question_tr: "Başkenti Roma olan ülke hangisidir?",
        options: { A: "Portugal", B: "Italy", C: "Austria", D: "Hungary" },
        options_tr: { A: "Portekiz", B: "İtalya", C: "Avusturya", D: "Macaristan" },
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

const STORAGE_KEY = "gamebot_v5_data";
const BLOCK_BOARD_SIZE = 8;

const TEXT = {
  en: {
    appSubtitle: "Chat a little, then jump into a game",
    inputPlaceholder: "Type your message...",
    botTyping: "Bot is typing...",
    send: "Send",
    restart: "Restart",
    sortingTitle: "Number Sorting Challenge",
    sortingDescription: "Drag the current number into an empty box and keep the full sequence in ascending order from left to right.",
    sortingSetupTitle: "Select Difficulty Range",
    sortingSetupDescription: "Choose a range to begin the challenge.",
    sortingPanelLabel: "Drag This Number",
    sortingWins: "Wins",
    sortingBestRange: "Best Range",
    selectedRange: "Selected range: 1 - {range}",
    noRangeSelected: "No range selected",
    startChallenge: "Start Challenge",
    rangeBadge: "Range: {range}",
    rangeBadgeEmpty: "Range: -",
    quizTitle: "General Knowledge Quiz",
    quizDescription: "Choose a category, then play one random prepared 5-question test.",
    blockTitle: "Block Puzzle",
    blockDescription: "Drag a block from below and drop it onto the 8x8 board. Fill full rows or columns to clear them.",
    blockScore: "Score",
    blockBestScore: "Best Score",
    blockStatus: "Status",
    blockLines: "Total Lines Cleared",
    blockAvailable: "Available Blocks",
    bestScoreMeta: "Best score: {score} / 5 • Plays: {plays}",
    languageQuestion: "Please choose your language to continue.",
    languageChooseGame: "Choose a game:",
    english: "English",
    turkish: "Türkçe",
    welcome1: "Hello! Welcome to GameBot.",
    welcome2: "I can handle simple chat and I can also launch games for you.",
    welcome3: "You can say things like hello, how are you, quiz, number sorting, or block puzzle.",
    wouldYouLike: "Would you like to play a game?",
    whichGame: "Which game would you like to play?",
    chooseGame: "Choose a game:",
    quiz: "Quiz",
    numberSorting: "Number Sorting",
    blockPuzzle: "Block Puzzle",
    randomGame: "Random Game",
    chooseQuizCategory: "Choose a quiz category:",
    mixed: "Mixed",
    science: "Science",
    geography: "Geography",
    randomCategory: "Random Category",
    greetingReply: "Hello! Nice to see you. Would you like to play a game?",
    howAreYouReply: "I'm doing well, thanks for asking. Would you like to play a game?",
    whoAreYouReply: "I'm GameBot. I can chat a little and help you start a game.",
    help1: "I can handle very simple chat and start games for you.",
    help2: "You can ask for Quiz, Number Sorting, Block Puzzle, or a Random Game.",
    thanksReply: "You're welcome. Would you like to play a game?",
    byeReply: "Goodbye! Come back when you want to play.",
    yesReply: "Great. Which game would you like to play?",
    noReply: "No problem. If you change your mind, I can start a game anytime.",
    notFitReply: "I'm not the best fit for that kind of conversation. Would you like to play a game?",
    easierChoices: "Here are easier choices:",
    harderChoices: "Here are harder choices:",
    quizMixed: "Quiz - Mixed",
    quizScience: "Quiz - Science",
    sortLose1: "Game over. {value} breaks the ascending order.",
    sortLose2: "That number does not fit correctly in the full sequence.",
    restartOrClose: "Press Restart to try again or X to return to the chat.",
    sortWin1: "Amazing! You placed all 10 numbers correctly.",
    sortWin2: "You win the number sorting game.",
    questionXofY: "Question {current} of {total}",
    correctAnswer: "Correct answer!",
    wrongAnswer: "Wrong answer. The correct answer was {answer}.",
    quizCompleted: "Quiz Completed",
    quizYourScore: "{score} / {total}",
    rankPerfect: "Outstanding performance. You are in the top 10% of players.",
    rankExcellent: "Excellent result. You are in the top 20% of players.",
    rankGreat: "Great effort. You are in the top 35% of players.",
    rankNice: "Nice try. You are in the top 50% of players.",
    rankStart: "Good start. Keep practicing and come back stronger for the next test.",
    yourAnswerCorrect: "Your answer: {answer} • Correct",
    yourAnswerWrong: "Your answer: {answer} • Correct answer: {correct}",
    blockStartStatus: "Drag a block onto the board to begin.",
    blockPlaced: "Block placed successfully.",
    blockCleared: "Great move! Cleared {count} line{suffix}.",
    blockNewPieces: "New playable blocks generated.",
    blockGameOver1: "Game over. Your block puzzle score is {score}.",
    blockGameOver2: "There are no more valid moves left for the remaining blocks.",
    changeLanguageCommand: "change language"
  },
  tr: {
    appSubtitle: "Biraz sohbet et, sonra oyuna geç",
    inputPlaceholder: "Mesajını yaz...",
    botTyping: "Bot yazıyor...",
    send: "Gönder",
    restart: "Yeniden Başlat",
    sortingTitle: "Sayı Sıralama Mücadelesi",
    sortingDescription: "Mevcut sayıyı boş bir kutuya sürükle ve dizilimi soldan sağa artan sırada tut.",
    sortingSetupTitle: "Zorluk Aralığı Seç",
    sortingSetupDescription: "Başlamak için bir aralık seç.",
    sortingPanelLabel: "Bu Sayıyı Sürükle",
    sortingWins: "Galibiyet",
    sortingBestRange: "En İyi Aralık",
    selectedRange: "Seçilen aralık: 1 - {range}",
    noRangeSelected: "Aralık seçilmedi",
    startChallenge: "Mücadeleyi Başlat",
    rangeBadge: "Aralık: {range}",
    rangeBadgeEmpty: "Aralık: -",
    quizTitle: "Genel Kültür Quiz",
    quizDescription: "Bir kategori seç ve hazırlanmış rastgele 5 soruluk testi oyna.",
    blockTitle: "Blok Bulmaca",
    blockDescription: "Aşağıdaki bloğu sürükleyip 8x8 tahtaya bırak. Tam satır veya sütunları doldurarak temizle.",
    blockScore: "Skor",
    blockBestScore: "En İyi Skor",
    blockStatus: "Durum",
    blockLines: "Toplam Temizlenen Çizgi",
    blockAvailable: "Mevcut Bloklar",
    bestScoreMeta: "En iyi skor: {score} / 5 • Oyun: {plays}",
    languageQuestion: "Devam etmek için lütfen dil seç.",
    languageChooseGame: "Bir oyun seç:",
    english: "English",
    turkish: "Türkçe",
    welcome1: "Merhaba! GameBot'a hoş geldin.",
    welcome2: "Temel seviyede sohbet edebilirim ve senin için oyun da başlatabilirim.",
    welcome3: "Merhaba, nasılsın, quiz, sayı sıralama veya blok bulmaca gibi şeyler yazabilirsin.",
    wouldYouLike: "Bir oyun oynamak ister misin?",
    whichGame: "Hangi oyunu oynamak istersin?",
    chooseGame: "Bir oyun seç:",
    quiz: "Quiz",
    numberSorting: "Sayı Sıralama",
    blockPuzzle: "Blok Bulmaca",
    randomGame: "Rastgele Oyun",
    chooseQuizCategory: "Bir quiz kategorisi seç:",
    mixed: "Karışık",
    science: "Bilim",
    geography: "Coğrafya",
    randomCategory: "Rastgele Kategori",
    greetingReply: "Merhaba! Seni görmek güzel. Bir oyun oynamak ister misin?",
    howAreYouReply: "İyiyim, sorduğun için teşekkürler. Bir oyun oynamak ister misin?",
    whoAreYouReply: "Ben GameBot'um. Biraz sohbet edebilirim ve oyun başlatmana yardımcı olabilirim.",
    help1: "Çok temel sohbetleri yapabilirim ve senin için oyun başlatabilirim.",
    help2: "Quiz, Sayı Sıralama, Blok Bulmaca veya Rastgele Oyun isteyebilirsin.",
    thanksReply: "Rica ederim. Bir oyun oynamak ister misin?",
    byeReply: "Görüşürüz! Oynamak istediğinde tekrar gel.",
    yesReply: "Harika. Hangi oyunu oynamak istersin?",
    noReply: "Sorun değil. Fikrini değiştirirsen istediğin zaman oyun başlatabilirim.",
    notFitReply: "Bu tarz bir sohbet için en uygun bot değilim. Bir oyun oynamak ister misin?",
    easierChoices: "Daha kolay seçenekler burada:",
    harderChoices: "Daha zor seçenekler burada:",
    quizMixed: "Quiz - Karışık",
    quizScience: "Quiz - Bilim",
    sortLose1: "Oyun bitti. {value} artan sıralamayı bozuyor.",
    sortLose2: "Bu sayı tüm dizilim içinde doğru yere uymuyor.",
    restartOrClose: "Tekrar denemek için Yeniden Başlat'a bas ya da sohbete dönmek için X'e tıkla.",
    sortWin1: "Harika! 10 sayının hepsini doğru yerleştirdin.",
    sortWin2: "Sayı sıralama oyununu kazandın.",
    questionXofY: "Soru {current} / {total}",
    correctAnswer: "Doğru cevap!",
    wrongAnswer: "Yanlış cevap. Doğru cevap {answer}.",
    quizCompleted: "Quiz Tamamlandı",
    quizYourScore: "{score} / {total}",
    rankPerfect: "Mükemmel performans. Oyuncuların en iyi %10'undasın.",
    rankExcellent: "Çok iyi sonuç. Oyuncuların en iyi %20'sindesin.",
    rankGreat: "Güzel performans. Oyuncuların en iyi %35'indesin.",
    rankNice: "Fena değil. Oyuncuların en iyi %50'sindesin.",
    rankStart: "İyi başlangıç. Pratik yapıp daha güçlü dönebilirsin.",
    yourAnswerCorrect: "Cevabın: {answer} • Doğru",
    yourAnswerWrong: "Cevabın: {answer} • Doğru cevap: {correct}",
    blockStartStatus: "Başlamak için bir bloğu tahtaya sürükle.",
    blockPlaced: "Blok başarıyla yerleştirildi.",
    blockCleared: "Harika hamle! {count} çizgi temizlendi.",
    blockNewPieces: "Yeni oynanabilir bloklar üretildi.",
    blockGameOver1: "Oyun bitti. Blok bulmaca skorun {score}.",
    blockGameOver2: "Kalan bloklar için artık geçerli hamle kalmadı.",
    changeLanguageCommand: "dili değiştir"
  }
};

let appData = getInitialAppData();
let mode = "menu";
let botQueue = Promise.resolve();
let botIsBusy = false;
let botSessionId = 0;
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

function getInitialAppData() {
  return {
    settings: {
      soundEnabled: true,
      language: null
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

function lang() {
  return appData.settings.language || "en";
}

function t(key, vars = {}) {
  const dictionary = TEXT[lang()] || TEXT.en;
  let value = dictionary[key] ?? TEXT.en[key] ?? key;
  Object.entries(vars).forEach(([k, v]) => {
    value = value.replaceAll(`{${k}}`, String(v));
  });
  return value;
}

function localizeCategory(category) {
  if (category === "mixed") return t("mixed");
  if (category === "science") return t("science");
  if (category === "geography") return t("geography");
  return category;
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
  } catch {
    appData = getInitialAppData();
  }
}

function saveAppData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function applyStaticTranslations() {
  chatHeaderSubtitle.textContent = t("appSubtitle");
  messageInput.placeholder = botIsBusy ? t("botTyping") : t("inputPlaceholder");
  sendButton.textContent = t("send");

  restartSortingGameButton.textContent = t("restart");
  restartQuizButton.textContent = t("restart");
  restartBlockPuzzleButton.textContent = t("restart");

  sortingTitle.textContent = t("sortingTitle");
  sortingDescription.textContent = t("sortingDescription");
  sortingSetupTitle.textContent = t("sortingSetupTitle");
  sortingSetupDescription.textContent = t("sortingSetupDescription");
  sortingPanelLabel.textContent = t("sortingPanelLabel");
  sortingWinsLabel.textContent = t("sortingWins");
  sortingBestRangeLabel.textContent = t("sortingBestRange");

  quizTitle.textContent = t("quizTitle");
  quizDescription.textContent = t("quizDescription");

  blockTitle.textContent = t("blockTitle");
  blockDescription.textContent = t("blockDescription");
  blockScoreLabel.textContent = t("blockScore");
  blockBestScoreLabel.textContent = t("blockBestScore");
  blockStatusLabel.textContent = t("blockStatus");
  blockLinesLabel.textContent = t("blockLines");
  blockPiecesTitle.textContent = t("blockAvailable");

  updateSortingSetupUI();
  updatePersistentGameStats();
  if (mode === "blockPuzzle" && !blockGameOver && blockScore === 0) {
    blockPuzzleStatus.textContent = t("blockStartStatus");
  }
}

function updatePersistentGameStats() {
  sortingWinsValue.textContent = appData.stats.sorting.wins;
  sortingBestRangeValue.textContent = appData.stats.sorting.bestRangeWon || "-";
  blockPuzzleBestScore.textContent = appData.stats.block.bestScore;
  blockTotalClearsValue.textContent = appData.stats.block.totalLinesCleared;
  quizBestMeta.textContent = t("bestScoreMeta", {
    score: appData.stats.quiz.bestScore,
    plays: appData.stats.quiz.plays
  });
  soundToggleButton.textContent = appData.settings.soundEnabled ? "🔊" : "🔇";
  messageInput.placeholder = botIsBusy ? t("botTyping") : t("inputPlaceholder");
}

function recordGamePlay(gameKey) {
  appData.stats.totalPlays += 1;
  appData.stats.gamesPlayed[gameKey] += 1;
  appData.stats[gameKey].plays += 1;
  saveAppData();
  updatePersistentGameStats();
  unlockAchievement("first_play");
  maybeUnlockAllRounder();
}

function unlockAchievement(id) {
  if (appData.achievements.includes(id)) return;

  const achievement = ACHIEVEMENTS.find((item) => item.id === id);
  if (!achievement) return;

  appData.achievements.push(id);
  saveAppData();
  updatePersistentGameStats();
  playSound("achievement");
}

function maybeUnlockAllRounder() {
  const played = appData.stats.gamesPlayed;
  if (played.quiz > 0 && played.sorting > 0 && played.block > 0) {
    unlockAchievement("all_rounder");
  }
}

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
  }
}

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
  messageInput.placeholder = shouldDisable ? t("botTyping") : t("inputPlaceholder");
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zA-ZçğıöşüÇĞİÖŞÜ0-9\s?']/g, "")
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

function getSortingBoxSize() {
  const firstBox = sortingBoard.querySelector(".sorting-box");
  if (!firstBox) return window.innerWidth <= 700 ? 52 : 60;
  return Math.round(firstBox.getBoundingClientRect().width);
}

function getBlockBoardCellSize() {
  const firstCell = blockBoard.querySelector(".block-cell");
  if (!firstCell) return window.innerWidth <= 700 ? 28 : 42;
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
    if (option.variant === "secondary") button.classList.add("secondary");
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
  botQueue = botQueue.then(() => botReply(text, sessionId)).finally(() => {
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
  botQueue = botQueue.then(() => botOptionReply(text, options, sessionId)).finally(() => {
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

function showGameOptionsOnly() {
  queueBotOptions(t("chooseGame"), [
    { label: t("quiz"), action: "menu_quiz" },
    { label: t("numberSorting"), action: "menu_sorting" },
    { label: t("blockPuzzle"), action: "menu_block" },
    { label: t("randomGame"), action: "menu_random", variant: "secondary" }
  ]);
}

function showMainMenu(isFirstLoad = false) {
  showOnlyScreen("chat");

  if (!appData.settings.language) {
    queueBotOptions(t("languageQuestion"), [
      { label: TEXT.en.english, action: "lang_en" },
      { label: TEXT.tr.turkish, action: "lang_tr" }
    ]);
    return;
  }

  if (isFirstLoad) {
    queueBotReplies([t("welcome1"), t("welcome2"), t("welcome3")]);
    showGameOptionsOnly();
  } else {
    queueBotReply(t("wouldYouLike"));
    showGameOptionsOnly();
  }
}

function showQuizCategoryMenu() {
  queueBotOptions(t("chooseQuizCategory"), [
    { label: t("mixed"), action: "quiz_mixed" },
    { label: t("science"), action: "quiz_science" },
    { label: t("geography"), action: "quiz_geography" },
    { label: t("randomCategory"), action: "quiz_random_category", variant: "secondary" }
  ]);
}

function setLanguage(languageCode) {
  appData.settings.language = languageCode;
  saveAppData();
  applyStaticTranslations();
  clearBotQueue();
  chatMessages.innerHTML = "";
  showMainMenu(true);
}

function handleChatAction(action) {
  if (action === "lang_en") {
    setLanguage("en");
    return;
  }

  if (action === "lang_tr") {
    setLanguage("tr");
    return;
  }

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
    const categories = ["mixed", "science", "geography"];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    startQuizGame(randomCategory);
  }
}

function launchRandomGame() {
  const games = ["quiz", "sorting", "block"];
  const randomGame = games[Math.floor(Math.random() * games.length)];

  if (randomGame === "quiz") {
    const categories = ["mixed", "science", "geography"];
    startQuizGame(categories[Math.floor(Math.random() * categories.length)]);
  } else if (randomGame === "sorting") {
    openSortingSetupScreen();
  } else {
    startBlockPuzzleGame();
  }
}

function replyThenShowOptions(replyText) {
  clearBotQueue();
  queueBotReply(replyText);
  showGameOptionsOnly();
}

function handleSmallTalk(text) {
  const normalized = normalizeText(text);

  const greetings = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "merhaba", "selam", "günaydın", "iyi akşamlar"];
  if (greetings.includes(normalized)) {
    replyThenShowOptions(t("greetingReply"));
    return true;
  }

  const howAreYouPatterns = [
    "how are you",
    "how are you doing",
    "hows it going",
    "how is it going",
    "nasılsın",
    "naber",
    "ne haber"
  ];
  if (howAreYouPatterns.includes(normalized)) {
    replyThenShowOptions(t("howAreYouReply"));
    return true;
  }

  const whoAreYouPatterns = [
    "what is your name",
    "whats your name",
    "who are you",
    "adın ne",
    "kimsin"
  ];
  if (whoAreYouPatterns.includes(normalized)) {
    replyThenShowOptions(t("whoAreYouReply"));
    return true;
  }

  const helpPatterns = ["what can you do", "help", "help me", "ne yapabiliyorsun", "yardım", "yardım et"];
  if (helpPatterns.includes(normalized)) {
    clearBotQueue();
    queueBotReplies([t("help1"), t("help2")]);
    showGameOptionsOnly();
    return true;
  }

  const thanksPatterns = ["thanks", "thank you", "thx", "teşekkürler", "teşekkür ederim", "sağ ol"];
  if (thanksPatterns.includes(normalized)) {
    replyThenShowOptions(t("thanksReply"));
    return true;
  }

  const byePatterns = ["bye", "goodbye", "see you", "görüşürüz", "hoşça kal"];
  if (byePatterns.includes(normalized)) {
    replyThenShowOptions(t("byeReply"));
    return true;
  }

  const yesPatterns = ["yes", "sure", "okay", "ok", "evet", "olur", "tamam"];
  if (yesPatterns.includes(normalized)) {
    clearBotQueue();
    queueBotReply(t("yesReply"));
    showGameOptionsOnly();
    return true;
  }

  const noPatterns = ["no", "not now", "hayır", "şimdi değil"];
  if (noPatterns.includes(normalized)) {
    replyThenShowOptions(t("noReply"));
    return true;
  }

  if (normalized === TEXT.en.changeLanguageCommand || normalized === TEXT.tr.changeLanguageCommand) {
    clearBotQueue();
    queueBotOptions(t("languageQuestion"), [
      { label: TEXT.en.english, action: "lang_en" },
      { label: TEXT.tr.turkish, action: "lang_tr" }
    ]);
    return true;
  }

  return false;
}

function handleBotSmartSelection(userText) {
  const text = normalizeText(userText);

  if (text.includes("random") || text.includes("rastgele")) {
    launchRandomGame();
    return true;
  }

  if (text.includes("easy") || text.includes("kolay")) {
    clearBotQueue();
    queueBotOptions(t("easierChoices"), [
      { label: t("quizMixed"), action: "quiz_mixed" },
      { label: t("numberSorting"), action: "menu_sorting" }
    ]);
    return true;
  }

  if (text.includes("hard") || text.includes("zor")) {
    clearBotQueue();
    queueBotOptions(t("harderChoices"), [
      { label: t("blockPuzzle"), action: "menu_block" },
      { label: t("quizScience"), action: "quiz_science" }
    ]);
    return true;
  }

  return false;
}

/* ---------- Sorting ---------- */

function updateSortingSetupUI() {
  const buttons = rangeButtons.querySelectorAll(".range-button");
  buttons.forEach((button) => {
    const rangeValue = Number(button.dataset.range);
    button.classList.toggle("active", rangeValue === sortingSelectedRange);
  });

  if (sortingSelectedRange) {
    selectedRangeText.textContent = t("selectedRange", { range: sortingSelectedRange });
    startSortingWithRangeButton.disabled = false;
  } else {
    selectedRangeText.textContent = t("noRangeSelected");
    startSortingWithRangeButton.disabled = true;
  }

  startSortingWithRangeButton.textContent = t("startChallenge");
}

function buildAvailableSortingNumbers(rangeMax) {
  sortingAvailableNumbers = Array.from({ length: rangeMax }, (_, index) => index + 1);
}

function getRandomUniqueSortingNumber() {
  if (sortingAvailableNumbers.length === 0) return null;
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
    if (sortingValues[i] !== null && value < sortingValues[i]) return false;
  }
  for (let i = index + 1; i < sortingValues.length; i++) {
    if (sortingValues[i] !== null && value > sortingValues[i]) return false;
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

    clearBotQueue();
    queueBotReplies([
      t("sortLose1", { value }),
      t("sortLose2"),
      t("restartOrClose")
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
    updatePersistentGameStats();
    unlockAchievement("sorting_first_win");

    if (sortingSelectedRange === 100) unlockAchievement("sorting_range_100");
    playSound("win");

    clearBotQueue();
    queueBotReplies([t("sortWin1"), t("sortWin2"), t("restartOrClose")]);
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

  [...sortingBoard.children].forEach((box) => box.classList.remove("drag-valid", "drag-invalid"));

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

  if (sortingDragState.ghost) sortingDragState.ghost.remove();
  [...sortingBoard.children].forEach((box) => box.classList.remove("drag-valid", "drag-invalid"));

  if (
    sortingDragState.targetIndex !== null &&
    sortingValues[sortingDragState.targetIndex] === null &&
    sortingCurrentNumber !== null
  ) {
    placeSortingNumber(sortingDragState.targetIndex);
  }

  sortingDragState = { active: false, ghost: null, targetIndex: null };
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
  currentRangeBadge.textContent = t("rangeBadgeEmpty");

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
  currentRangeBadge.textContent = t("rangeBadge", { range: `1 - ${sortingSelectedRange}` });

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

/* ---------- Quiz ---------- */

function getRankingMessage(score, total) {
  if (score === total) return t("rankPerfect");
  if (score === total - 1) return t("rankExcellent");
  if (score === 3) return t("rankGreat");
  if (score === 2) return t("rankNice");
  return t("rankStart");
}

function getRandomQuizSet(category) {
  const matchingSets = quizTestBank.filter((set) => set.category === category);
  const randomSet = matchingSets[Math.floor(Math.random() * matchingSets.length)];

  return {
    ...randomSet,
    questions: randomSet.questions.map((item) => ({
      question: lang() === "tr" ? item.question_tr : item.question,
      options: lang() === "tr" ? item.options_tr : item.options,
      correctAnswer: item.correctAnswer
    })),
    titleLocalized: lang() === "tr" ? randomSet.title_tr : randomSet.title
  };
}

function startQuizGame(category = "mixed") {
  clearBotQueue();
  const selectedSet = getRandomQuizSet(category);

  mode = "quiz";
  currentQuestionIndex = 0;
  quizScore = 0;
  quizAnswers = [];
  quizLocked = false;
  activeQuizCategory = category;
  activeQuizTitle = selectedSet.titleLocalized;
  activeQuizQuestions = selectedSet.questions;

  recordGamePlay("quiz");
  appData.stats.quiz.byCategory[category] += 1;
  saveAppData();
  updatePersistentGameStats();

  quizMainCard.classList.remove("hidden");
  quizResults.classList.add("hidden");
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";

  quizCategoryBadge.textContent = localizeCategory(category);
  quizSetTitle.textContent = activeQuizTitle;

  showOnlyScreen("quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const currentQuestion = activeQuizQuestions[currentQuestionIndex];

  quizProgress.textContent = t("questionXofY", {
    current: currentQuestionIndex + 1,
    total: activeQuizQuestions.length
  });
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

  optionButtons.forEach((button) => { button.disabled = true; });
  selectedButton.classList.add("selected");

  if (selectedLetter === correctLetter) {
    quizScore++;
    selectedButton.classList.add("correct");
    quizFeedback.textContent = t("correctAnswer");
    quizFeedback.classList.add("correct-text");
    playSound("correct");
  } else {
    selectedButton.classList.add("wrong");

    const correctButton = optionButtons.find(
      (button) => button.querySelector(".quiz-option-letter").textContent === correctLetter
    );

    if (correctButton) correctButton.classList.add("correct");

    quizFeedback.textContent = t("wrongAnswer", { answer: correctLetter });
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
  updatePersistentGameStats();

  quizFinalTitle.textContent = t("quizCompleted");
  quizFinalScore.textContent = t("quizYourScore", {
    score: quizScore,
    total: activeQuizQuestions.length
  });
  quizRankingText.textContent = getRankingMessage(quizScore, activeQuizQuestions.length);
  quizBestMeta.textContent = t("bestScoreMeta", {
    score: appData.stats.quiz.bestScore,
    plays: appData.stats.quiz.plays
  });

  if (quizScore >= 4) playSound("win");

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

      if (letter === item.correctAnswer) option.classList.add("correct");
      if (letter === item.selectedAnswer) {
        option.classList.add("user-selected");
        if (item.selectedAnswer !== item.correctAnswer) option.classList.add("wrong");
      }

      reviewOptions.appendChild(option);
    });

    const badge = document.createElement("div");
    badge.classList.add("review-badge");
    badge.textContent =
      item.selectedAnswer === item.correctAnswer
        ? t("yourAnswerCorrect", { answer: item.selectedAnswer })
        : t("yourAnswerWrong", { answer: item.selectedAnswer, correct: item.correctAnswer });

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

/* ---------- Block ---------- */

function createEmptyBlockBoard() {
  return Array.from({ length: BLOCK_BOARD_SIZE }, () => Array(BLOCK_BOARD_SIZE).fill(0));
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
    if (blockBoardState[row][col] === 1) cell.classList.add("filled");
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
        boardRow < 0 || boardRow >= BLOCK_BOARD_SIZE ||
        boardCol < 0 || boardCol >= BLOCK_BOARD_SIZE
      ) return false;

      if (blockBoardState[boardRow][boardCol] === 1) return false;
    }
  }
  return true;
}

function canShapeFitAnywhere(shape) {
  for (let row = 0; row < BLOCK_BOARD_SIZE; row++) {
    for (let col = 0; col < BLOCK_BOARD_SIZE; col++) {
      if (canPlaceBlock(shape, row, col)) return true;
    }
  }
  return false;
}

function getRandomPlayableBlockShape() {
  const shuffledShapes = [...blockShapes].sort(() => Math.random() - 0.5);
  for (const shape of shuffledShapes) {
    if (canShapeFitAnywhere(shape)) return shape.map((row) => [...row]);
  }
  return null;
}

function generatePlayableBlockPieces() {
  const guaranteedShape = getRandomPlayableBlockShape();
  if (!guaranteedShape) return [];

  const pieces = [{ shape: guaranteedShape, used: false }];
  for (let i = 0; i < 2; i++) {
    pieces.push({ shape: getRandomBlockShape(), used: false });
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

      if (cellValue === 1) cell.classList.add("active");
      if (isGhost) cell.style.opacity = cellValue === 1 ? "0.96" : "0.45";

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
      card.addEventListener("pointerdown", (event) => startBlockDrag(index, event, card));
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
        boardRow < 0 || boardRow >= BLOCK_BOARD_SIZE ||
        boardCol < 0 || boardCol >= BLOCK_BOARD_SIZE
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
  [...blockBoard.children].forEach((cell) => cell.classList.remove("preview-valid", "preview-invalid"));
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
    if (blockBoardState[row].every((cell) => cell === 1)) fullRows.push(row);
  }

  for (let col = 0; col < BLOCK_BOARD_SIZE; col++) {
    let isFull = true;
    for (let row = 0; row < BLOCK_BOARD_SIZE; row++) {
      if (blockBoardState[row][col] !== 1) {
        isFull = false;
        break;
      }
    }
    if (isFull) fullCols.push(col);
  }

  fullRows.forEach((row) => {
    for (let col = 0; col < BLOCK_BOARD_SIZE; col++) blockBoardState[row][col] = 0;
  });

  fullCols.forEach((col) => {
    for (let row = 0; row < BLOCK_BOARD_SIZE; row++) blockBoardState[row][col] = 0;
  });

  return fullRows.length + fullCols.length;
}

function areAllBlockPiecesUsed() {
  return blockCurrentPieces.every((piece) => piece.used);
}

function hasAnyValidMoveForCurrentPieces() {
  const remainingPieces = blockCurrentPieces.filter((piece) => !piece.used);
  if (remainingPieces.length === 0) return true;

  for (const piece of remainingPieces) {
    for (let row = 0; row < BLOCK_BOARD_SIZE; row++) {
      for (let col = 0; col < BLOCK_BOARD_SIZE; col++) {
        if (canPlaceBlock(piece.shape, row, col)) return true;
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
  updatePersistentGameStats();
  playSound("wrong");

  clearBotQueue();
  queueBotReplies([
    t("blockGameOver1", { score: blockScore }),
    t("blockGameOver2"),
    t("restartOrClose")
  ]);
}

function tryPlaceDraggedBlock(pieceIndex, row, col) {
  const piece = blockCurrentPieces[pieceIndex];
  if (!piece || piece.used || !canPlaceBlock(piece.shape, row, col)) return false;

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
    updateBlockPuzzleStatus(t("blockCleared", {
      count: clearedLines,
      suffix: clearedLines > 1 ? "s" : ""
    }));
    playSound("line");
  } else {
    updateBlockPuzzleStatus(t("blockPlaced"));
    playSound("place");
  }

  appData.stats.block.bestScore = Math.max(appData.stats.block.bestScore, blockScore);
  saveAppData();
  updatePersistentGameStats();

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
    updateBlockPuzzleStatus(t("blockNewPieces"));
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

function getCenteredBlockStartPosition(clientX, clientY, shape) {
  const rect = blockBoard.getBoundingClientRect();

  if (
    clientX < rect.left || clientX > rect.right ||
    clientY < rect.top || clientY > rect.bottom
  ) return null;

  const localX = clientX - rect.left;
  const localY = clientY - rect.top;

  const cellSpanX = rect.width / BLOCK_BOARD_SIZE;
  const cellSpanY = rect.height / BLOCK_BOARD_SIZE;

  const startCol = Math.round(localX / cellSpanX - shape[0].length / 2);
  const startRow = Math.round(localY / cellSpanY - shape.length / 2);

  return { row: startRow, col: startCol };
}

function updateBlockDrag(clientX, clientY) {
  if (!blockDragState.active || !blockDragState.ghost) return;

  blockDragState.ghost.style.left = `${clientX}px`;
  blockDragState.ghost.style.top = `${clientY}px`;

  const piece = blockCurrentPieces[blockDragState.pieceIndex];
  if (!piece) return;

  clearBlockPreview();
  blockDragState.hoverRow = null;
  blockDragState.hoverCol = null;

  const placement = getCenteredBlockStartPosition(clientX, clientY, piece.shape);
  if (!placement) return;

  blockDragState.hoverRow = placement.row;
  blockDragState.hoverCol = placement.col;

  previewBlockPlacement(placement.row, placement.col, piece.shape);
}

function endBlockDrag(forceCleanupOnly = false) {
  if (!blockDragState.active && !forceCleanupOnly) return;

  const { pieceIndex, hoverRow, hoverCol, sourceCard, ghost } = blockDragState;

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
  updateBlockPuzzleStatus(t("blockStartStatus"));
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

/* ---------- Input ---------- */

function handleMenuSelection(userMessage) {
  const selectedGame = normalizeText(userMessage);

  if (handleSmallTalk(selectedGame)) return;
  if (handleBotSmartSelection(selectedGame)) return;

  const quizTerms = ["quiz", "quiz game"];
  const sortingTerms = ["number sorting", "sorting game", "number sort", "sorting", "sayı sıralama"];
  const blockTerms = ["block puzzle", "block", "block blast", "puzzle", "blok bulmaca"];
  const mixedTerms = ["mixed", "karışık"];
  const scienceTerms = ["science", "bilim"];
  const geographyTerms = ["geography", "coğrafya"];

  if (quizTerms.includes(selectedGame)) {
    clearBotQueue();
    showQuizCategoryMenu();
  } else if (sortingTerms.includes(selectedGame)) {
    openSortingSetupScreen();
  } else if (blockTerms.includes(selectedGame)) {
    startBlockPuzzleGame();
  } else if (mixedTerms.includes(selectedGame)) {
    startQuizGame("mixed");
  } else if (scienceTerms.includes(selectedGame)) {
    startQuizGame("science");
  } else if (geographyTerms.includes(selectedGame)) {
    startQuizGame("geography");
  } else {
    replyThenShowOptions(t("notFitReply"));
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

function handleGlobalPointerMove(event) {
  if (sortingDragState.active) updateSortingDrag(event.clientX, event.clientY);
  if (blockDragState.active) updateBlockDrag(event.clientX, event.clientY);
}

function handleGlobalPointerUp() {
  if (sortingDragState.active) endSortingDrag();
  if (blockDragState.active) endBlockDrag();
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
  if (event.key === "Enter") handleUserInput();
});

soundToggleButton.addEventListener("click", () => {
  appData.settings.soundEnabled = !appData.settings.soundEnabled;
  saveAppData();
  updatePersistentGameStats();
  if (appData.settings.soundEnabled) playSound("correct");
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
applyStaticTranslations();
updateInputState();
showOnlyScreen("chat");
showMainMenu(true);