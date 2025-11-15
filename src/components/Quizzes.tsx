import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Trophy, Star, CheckCircle2, XCircle } from 'lucide-react';
import { Page } from '../App';

interface QuizzesProps {
  setCurrentPage: (page: Page) => void;
}

export function Quizzes({ setCurrentPage }: QuizzesProps) {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const quizzes = [
    {
      id: 'math-basic',
      subject: 'Math',
      title: 'Addition Quiz',
      emoji: '➕',
      difficulty: 'Easy',
      questions: 5,
      color: 'from-blue-400 to-blue-600',
      questions_data: [
        { question: '2 + 3 = ?', options: ['4', '5', '6', '7'], correct: 1 },
        { question: '5 + 2 = ?', options: ['6', '7', '8', '9'], correct: 1 },
        { question: '1 + 4 = ?', options: ['3', '4', '5', '6'], correct: 2 },
        { question: '3 + 3 = ?', options: ['5', '6', '7', '8'], correct: 1 },
        { question: '4 + 5 = ?', options: ['7', '8', '9', '10'], correct: 2 },
      ],
    },
    {
      id: 'science-animals',
      subject: 'Science',
      title: 'Animals Quiz',
      emoji: '🐶',
      difficulty: 'Easy',
      questions: 5,
      color: 'from-green-400 to-green-600',
      questions_data: [
        { question: 'What sound does a dog make?', options: ['Meow', 'Woof', 'Moo', 'Quack'], correct: 1 },
        { question: 'Which animal has a trunk?', options: ['Lion', 'Elephant', 'Tiger', 'Bear'], correct: 1 },
        { question: 'What do cows give us?', options: ['Eggs', 'Milk', 'Honey', 'Wool'], correct: 1 },
        { question: 'Which animal can fly?', options: ['Dog', 'Cat', 'Bird', 'Fish'], correct: 2 },
        { question: 'Where do fish live?', options: ['Trees', 'Water', 'Desert', 'Sky'], correct: 1 },
      ],
    },
    {
      id: 'english-words',
      subject: 'English',
      title: 'Vocabulary Quiz',
      emoji: '📝',
      difficulty: 'Easy',
      questions: 5,
      color: 'from-orange-400 to-orange-600',
      questions_data: [
        { question: 'What color is the sky?', options: ['Red', 'Blue', 'Green', 'Yellow'], correct: 1 },
        { question: 'How many days in a week?', options: ['5', '6', '7', '8'], correct: 2 },
        { question: 'What do we use to write?', options: ['Fork', 'Pen', 'Spoon', 'Plate'], correct: 1 },
        { question: 'Which is a fruit?', options: ['Carrot', 'Apple', 'Potato', 'Onion'], correct: 1 },
        { question: 'What comes after Monday?', options: ['Sunday', 'Tuesday', 'Friday', 'Saturday'], correct: 1 },
      ],
    },
  ];

  const handleStartQuiz = (quizId: string) => {
    setActiveQuiz(quizId);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    const quiz = quizzes.find((q) => q.id === activeQuiz);
    if (!quiz) return;

    const correct = quiz.questions_data[currentQuestion].correct === answerIndex;
    setSelectedAnswer(answerIndex);
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quiz.questions_data.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const activeQuizData = quizzes.find((q) => q.id === activeQuiz);

  if (activeQuiz && activeQuizData && !showResult) {
    const currentQ = activeQuizData.questions_data[currentQuestion];

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 rounded-3xl shadow-2xl bg-white">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <Badge className="rounded-full bg-purple-100 text-purple-700">
                  Question {currentQuestion + 1}/{activeQuizData.questions_data.length}
                </Badge>
                <Badge className="rounded-full bg-yellow-100 text-yellow-700">
                  Score: {score}
                </Badge>
              </div>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{activeQuizData.emoji}</div>
                <h2 className="text-2xl text-gray-800 mb-2">{currentQ.question}</h2>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  className={`w-full h-auto py-6 text-lg rounded-2xl transition-all ${
                    selectedAnswer === null
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 hover:from-purple-200 hover:to-pink-200'
                      : selectedAnswer === index
                      ? isCorrect
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : index === currentQ.correct
                      ? 'bg-green-200 text-gray-800'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{option}</span>
                    {selectedAnswer === index && (
                      isCorrect ? <CheckCircle2 className="h-6 w-6" /> : <XCircle className="h-6 w-6" />
                    )}
                  </div>
                </Button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className={`text-center p-4 rounded-2xl ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className={`text-lg ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {isCorrect ? '🎉 Correct! Great job!' : '❌ Oops! Try again next time!'}
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  }

  if (showResult && activeQuizData) {
    const percentage = (score / activeQuizData.questions_data.length) * 100;

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-yellow-100 to-orange-100 text-center">
            <div className="text-7xl mb-6">
              {percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐' : '💪'}
            </div>
            <h2 className="text-4xl mb-4 text-orange-700">Quiz Complete!</h2>
            <p className="text-2xl mb-8 text-gray-800">
              You scored {score} out of {activeQuizData.questions_data.length}
            </p>
            
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
              <div className="text-6xl mb-4">{Math.round(percentage)}%</div>
              <p className="text-xl text-gray-700">
                {percentage >= 80
                  ? '🌟 Excellent work! You are a star!'
                  : percentage >= 60
                  ? '👍 Good job! Keep practicing!'
                  : '💪 Nice try! Practice makes perfect!'}
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                onClick={handleRestartQuiz}
              >
                Try Again
              </Button>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  setActiveQuiz(null);
                  setCurrentPage('dashboard');
                }}
              >
                View Progress
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🎯</div>
        <h1 className="text-4xl mb-4 text-purple-700">Fun Quizzes</h1>
        <p className="text-xl text-gray-700">Test your knowledge and earn stars!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {quizzes.map((quiz) => (
          <Card
            key={quiz.id}
            className="overflow-hidden border-0 shadow-xl rounded-3xl transform hover:scale-105 transition-all bg-white"
          >
            <div className={`h-32 bg-gradient-to-br ${quiz.color} flex items-center justify-center`}>
              <div className="text-6xl">{quiz.emoji}</div>
            </div>
            <div className="p-6">
              <Badge className="mb-3 rounded-full bg-purple-100 text-purple-700">
                {quiz.subject}
              </Badge>
              <h3 className="text-2xl mb-2 text-gray-800">{quiz.title}</h3>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" />
                  {quiz.difficulty}
                </span>
                <span>{quiz.questions} Questions</span>
              </div>
              <Button
                className={`w-full rounded-full bg-gradient-to-r ${quiz.color} hover:opacity-90 text-white`}
                onClick={() => handleStartQuiz(quiz.id)}
              >
                <Star className="mr-2 h-4 w-4" />
                Start Quiz
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg text-center">
        <h2 className="text-3xl mb-4 text-purple-700">🎊 Earn Rewards! 🎊</h2>
        <p className="text-lg text-gray-700 mb-6">
          Complete quizzes to earn stars and unlock special badges. 
          The more you learn, the more rewards you get!
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-4">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-sm text-gray-700">Bronze Star</div>
          </div>
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-4">
            <div className="text-3xl mb-2">🥈</div>
            <div className="text-sm text-gray-700">Silver Medal</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-2xl p-4">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-sm text-gray-700">Gold Trophy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
