import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy, Sparkles, Star, Coffee, Camera, Music } from 'lucide-react';

// Helper to shuffle array (runs once per load)
const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const rawQuestions = [
  {
    question: "Who is the absolute best friend you've ever had?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Yesss! I'm your ride-or-die, Billu! Nobody matches our vibe! 🌟"
  },
  {
    question: "Who dragged you to the fest ground on November 26, 2023 when you were sitting alone?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Me! I searched the whole crowd and pulled you to dance like a total Punjabi queen 😂 Iconic day!"
  },
  {
    question: "Who understands you even when you're completely quiet and the world doesn't?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "That's always me. I speak your silence fluently – our secret language forever! 💬"
  },
  {
    question: "Who got a tiny bit jealous on their birthday because everyone was dancing with you?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Guilty! But I was also super proud – all my friends treated you like family too 😅"
  },
  {
    question: "Who is your ultimate hackathon and event partner?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Us against the world – late nights, crazy ideas, wins and learns. Best team ever! 🏆"
  },
  {
    question: "Who did you dramatically block first during a silly fight?",
    options: ["You blocked Sarthak! 😭", "Sarthak blocked you", "Kanan blocked someone", "Nobody blocked anyone"],
    correct: "You blocked Sarthak! 😭",
    feedback: "So bad of you yrrrr! But it just showed how much we already cared. Classic Billu drama 😂"
  },
  {
    question: "Who protects your innocence like it's their life's mission?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Always! You're the purest soul I know, and I'll guard that forever."
  },
  {
    question: "Who calls you 'Billu' and gets away with it every single time?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Special nickname privileges – only I can say it and make you smile like that! 😜"
  },
  {
    question: "Who still laughs hysterically at our fest dance photos thinking 'bhai kya ho gaya tha tere ko'?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Me, every single time I open them! You went FULL energy – no lyrics needed. Legendary!"
  },
  {
    question: "Who will find you in every universe, every lifetime, every college fest?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "No matter where, when, or which life – I'll spot those big eyes and drag you to dance again! ∞"
  },
  {
    question: "Who is your Tom to your Jerry (pure chaos duo)?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "We're that inseparable, annoying-each-other-but-never-apart kind of besties! 🐱🐭"
  },
  {
    question: "Who stayed up with you during late-night gossip sessions?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Countless nights of tea, talks, and zero sleep – best memories!"
  },
  {
    question: "Who always saves you the best seat in class or canteen?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Reserved spot right next to me – always has been, always will be!"
  },
  {
    question: "Who gets super excited whenever you achieve something big?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Louder than anyone! Your wins are my wins, Billu!"
  },
  {
    question: "Who knows all your favorite snacks and brings them without asking?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "I know your order by heart – surprise treats incoming!"
  },
  {
    question: "Who takes the most candid photos of you (and you secretly love them)?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "I catch all your real smiles – gallery full of Billu gold!"
  },
  {
    question: "Who is your go-to person when you need honest advice?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Straight talk, no sugarcoating – but always with your best interest at heart."
  },
  {
    question: "Who celebrates your quirks like they're the best thing ever?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Everything that makes you YOU is my favorite!"
  },
  {
    question: "Who shares their earphones with you during long college days?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "One earphone each – our playlist, our vibe."
  },
  {
    question: "Who always notices when you're feeling low, even when you hide it?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "I see right through your 'I'm fine' – and I'm here every time."
  },
  {
    question: "Who plans random adventures just to make you smile?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Spontaneous plans = best memories with you!"
  },
  {
    question: "Who is your biggest hype man in the entire college?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Always cheering the loudest for everything you do!"
  },
  {
    question: "Who knows your coffee/tea order perfectly?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Extra sweet, just how you like it – delivered with care!"
  },
  {
    question: "Who sends you random memes at 2 AM because they made them think of you?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Our meme game is unmatched – inside jokes only we get!"
  },
  {
    question: "Who is your partner for all future fests and events?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Front row, dancing, clicking pics – always together!"
  },
  {
    question: "Who will be your best friend when we're old and grey?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Still giggling, still gossiping, still speaking our secret language – forever!"
  },
  {
    question: "Who always saves your notes when you miss class?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Full notes, highlighted important parts – got your back always!"
  },
  {
    question: "Who gets protective when someone bothers you?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Mess with Billu = deal with me. Simple."
  },
  {
    question: "Who shares their jacket with you when it's cold?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Here, take mine – classic move!"
  },
  {
    question: "Who knows all your family stories?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "I've heard them all multiple times and still love listening!"
  },
  {
    question: "Who plans surprise birthday things for you?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Secret planning mode activated every year!"
  },
  {
    question: "Who is your emergency call at any hour?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "3 AM panic? I'm already picking up."
  },
  {
    question: "Who takes your side in every group argument?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Team Billu, always and forever!"
  },
  {
    question: "Who remembers tiny details you mentioned once?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "I store every little thing you say – because it matters."
  },
  {
    question: "Who is your forever fest dance partner?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "More crazy energy moments loading!"
  },
  {
    question: "Who makes boring college days fun?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "With me around, no day is ever dull!"
  },
  {
    question: "Who knows your comfort movie/song?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "On repeat when you need it most."
  },
  {
    question: "Who is your human diary?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Everything stays safe with me – always."
  },
  {
    question: "Who gets equally excited about your random ideas?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Let's do it! I'm already in."
  },
  {
    question: "Who is your permanent plus-one to everything?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "No event complete without us together!"
  },
  {
    question: "Who sends 'good morning' and 'good night' texts?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Starting and ending my day with you!"
  },
  {
    question: "Who knows exactly how to cheer you up?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Guaranteed smile within minutes."
  },
  {
    question: "Who shares food with you (big sacrifice)?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "My plate is your plate – always!"
  },
  {
    question: "Who is your partner for future road trips?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Windows down, music up, us against the highway!"
  },
  {
    question: "Who believes in you more than anyone?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "You've got this – and I'll remind you every day."
  },
  {
    question: "Who is your forever college memory maker?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Every chapter has us in it!"
  },
  {
    question: "Who is proud to call you their best friend?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Loud and proud – always!"
  },
  {
    question: "Who will never let our friendship fade?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Not on my watch – we're in this for life!"
  },
  {
    question: "Who is your home away from home?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "Wherever I am, you're home too."
  },
  {
    question: "Who can't imagine college without you?",
    options: ["Sarthak", "Kanan", "Abhi", "Prerika"],
    correct: "Sarthak",
    feedback: "These years are magical because of you, Billu."
  }
];

// Prepare 50 shuffled questions
const quizQuestions = rawQuestions.slice(0, 50).map(q => {
  const shuffled = shuffleArray(q.options.map((opt, idx) => ({
    text: opt,
    isCorrect: opt === q.correct
  })));
  return {
    question: q.question,
    options: shuffled.map(o => o.text),
    correctIndex: shuffled.findIndex(o => o.isCorrect),
    feedback: q.feedback
  };
});

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "PERFECT! You know our friendship better than anyone, Billu! 🏆✨";
    if (percentage >= 80) return "Amazing job! You're basically my friendship soulmate! 🌟";
    if (percentage >= 50) return "Great effort! You definitely know who your real bestie is 😉";
    return `Nice try! ${score}/${quizQuestions.length} – But deep down you know it's always Sarthak! 😜`;
  };

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-teal-100 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center border border-white/40">
            <Trophy className="w-24 h-24 text-purple-500 mx-auto mb-8 animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Quiz Complete!
            </h1>
            <div className="text-7xl font-bold text-purple-600 mb-6">
              {score}/{quizQuestions.length}
            </div>
            <p className="text-2xl sm:text-3xl text-gray-800 mb-8 leading-relaxed max-w-3xl mx-auto">
              {getScoreMessage()}
            </p>
            <p className="text-xl text-purple-700 font-medium mb-10">
              Thanks for being the most epic best friend, Billu. Our story is the best one out there! 💫
            </p>

            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto"
            >
              <RotateCcw className="w-6 h-6 mr-3" />
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-teal-100 py-12 px-4">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Sparkles className="absolute top-20 left-10 w-12 h-12 text-pink-300 opacity-40 animate-pulse" />
        <Star className="absolute top-40 right-20 w-10 h-10 text-purple-300 opacity-30 animate-pulse delay-500" fill="currentColor" />
        <Coffee className="absolute bottom-40 left-1/4 w-14 h-14 text-teal-200 opacity-30 animate-pulse delay-700" />
        <Camera className="absolute bottom-20 right-1/3 w-12 h-12 text-pink-200 opacity-40 animate-pulse delay-300" />
        <Music className="absolute top-1/3 left-1/2 w-10 h-10 text-purple-300 opacity-40 animate-pulse" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-12 h-12 text-purple-500 mr-4" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Ultimate Bestie Quiz
            </h1>
            <Sparkles className="w-12 h-12 text-pink-500 ml-4" />
          </div>
          <p className="text-xl sm:text-2xl text-purple-700 font-light opacity-90">
            50 questions about our epic friendship, Billu! Choose wisely 😏
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/40">
          <div className="mb-10">
            <div className="flex justify-between text-purple-600 font-medium mb-3">
              <span>Question {currentQuestion + 1} / {quizQuestions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div className="w-full bg-white/50 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10 px-4">
            {question.question}
          </h2>

          <div className="grid gap-5">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`p-5 sm:p-6 rounded-2xl text-left font-medium text-lg transition-all duration-300 border-2 flex items-center ${
                  showResult
                    ? index === question.correctIndex
                      ? 'bg-green-50 border-green-400 text-green-800 shadow-lg'
                      : index === selectedAnswer
                      ? 'bg-red-50 border-red-400 text-red-800'
                      : 'bg-white/50 border-white/30 text-gray-500'
                    : selectedAnswer === index
                    ? 'bg-purple-100 border-purple-500 text-purple-800 shadow-md'
                    : 'bg-white/50 border-white/30 text-gray-700 hover:border-purple-400 hover:bg-purple-50'
                }`}
              >
                <span className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold text-sm sm:text-base flex-shrink-0 ${
                  showResult && index === question.correctIndex ? 'bg-green-400 text-white' :
                  showResult && index === selectedAnswer && index !== question.correctIndex ? 'bg-red-400 text-white' :
                  selectedAnswer === index ? 'bg-purple-500 text-white' :
                  'bg-gray-200 text-gray-600'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
                {showResult && index === question.correctIndex && <CheckCircle className="w-7 h-7 text-green-600 ml-auto" />}
                {showResult && index === selectedAnswer && index !== question.correctIndex && <XCircle className="w-7 h-7 text-red-600 ml-auto" />}
              </button>
            ))}
          </div>

          {showResult && (
            <div className="mt-8 p-6 bg-purple-100/70 rounded-2xl border-l-4 border-purple-500">
              <p className="text-lg sm:text-xl text-purple-800 font-medium text-center">
                {question.feedback}
              </p>
            </div>
          )}

          <div className="text-center mt-10">
            {!showResult ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={`px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 ${
                  selectedAnswer !== null
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {currentQuestion === quizQuestions.length - 1 ? 'See Final Score' : 'Next Question →'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}