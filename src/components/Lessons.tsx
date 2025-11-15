import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Play, Lock, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Page } from '../App';

interface LessonsProps {
  selectedSubject: string | null;
  setCurrentPage: (page: Page) => void;
}

export function Lessons({ selectedSubject, setCurrentPage }: LessonsProps) {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);

  const subjectData: Record<string, any> = {
    math: {
      name: 'Math',
      emoji: '🔢',
      color: 'blue',
      lessons: [
        { id: 1, title: 'Counting 1-10', description: 'Learn to count from 1 to 10!', status: 'completed', icon: '1️⃣' },
        { id: 2, title: 'Addition Basics', description: 'Adding numbers together', status: 'completed', icon: '➕' },
        { id: 3, title: 'Subtraction Fun', description: 'Taking numbers away', status: 'current', icon: '➖' },
        { id: 4, title: 'Shapes & Patterns', description: 'Recognize shapes and patterns', status: 'locked', icon: '🔷' },
        { id: 5, title: 'Time Telling', description: 'Learn to read the clock', status: 'locked', icon: '⏰' },
      ],
    },
    science: {
      name: 'Science',
      emoji: '🔬',
      color: 'green',
      lessons: [
        { id: 1, title: 'Animals Around Us', description: 'Learn about different animals', status: 'completed', icon: '🐶' },
        { id: 2, title: 'Plants & Trees', description: 'How plants grow', status: 'current', icon: '🌱' },
        { id: 3, title: 'Weather & Seasons', description: 'Sun, rain, and snow', status: 'locked', icon: '☀️' },
        { id: 4, title: 'Space & Planets', description: 'Explore the solar system', status: 'locked', icon: '🪐' },
        { id: 5, title: 'Simple Experiments', description: 'Fun science experiments', status: 'locked', icon: '🧪' },
      ],
    },
    english: {
      name: 'English',
      emoji: '📖',
      color: 'orange',
      lessons: [
        { id: 1, title: 'The Alphabet', description: 'Learn A to Z', status: 'completed', icon: '🔤' },
        { id: 2, title: 'Simple Words', description: 'Reading basic words', status: 'completed', icon: '📝' },
        { id: 3, title: 'Short Stories', description: 'Fun reading stories', status: 'current', icon: '📚' },
        { id: 4, title: 'Rhyming Words', description: 'Words that sound alike', status: 'locked', icon: '🎵' },
        { id: 5, title: 'Writing Practice', description: 'Practice writing letters', status: 'locked', icon: '✏️' },
      ],
    },
  };

  const subject = selectedSubject ? subjectData[selectedSubject] : subjectData.math;
  const completedLessons = subject.lessons.filter((l: any) => l.status === 'completed').length;
  const progressPercent = (completedLessons / subject.lessons.length) * 100;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'current':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'current':
        return <Play className="h-5 w-5 text-yellow-600" />;
      default:
        return <Lock className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6 rounded-full"
        onClick={() => setCurrentPage('subjects')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Subjects
      </Button>

      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{subject.emoji}</div>
        <h1 className="text-4xl mb-4 text-purple-700">{subject.name} Lessons</h1>
        <p className="text-xl text-gray-700">Continue your learning journey!</p>
      </div>

      {/* Progress Overview */}
      <Card className="max-w-2xl mx-auto mb-8 p-6 rounded-3xl shadow-lg bg-white">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700">Your Progress</span>
          <Badge className="rounded-full bg-purple-100 text-purple-700">
            {completedLessons}/{subject.lessons.length} completed
          </Badge>
        </div>
        <Progress value={progressPercent} className="h-3 rounded-full" />
        <p className="text-sm text-gray-600 mt-2">Keep going! You're doing great! 🌟</p>
      </Card>

      {/* Lessons List */}
      <div className="max-w-2xl mx-auto space-y-4">
        {subject.lessons.map((lesson: any) => (
          <Card
            key={lesson.id}
            className={`p-6 rounded-3xl shadow-lg transition-all transform hover:scale-102 cursor-pointer border-2 ${getStatusColor(
              lesson.status
            )}`}
            onClick={() => lesson.status !== 'locked' && setActiveLesson(lesson.id)}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">{lesson.icon}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl text-gray-800">
                    Lesson {lesson.id}: {lesson.title}
                  </h3>
                  {getStatusIcon(lesson.status)}
                </div>
                <p className="text-gray-600 mb-4">{lesson.description}</p>
                {lesson.status === 'completed' && (
                  <Badge className="rounded-full bg-green-500 text-white">
                    ✓ Completed
                  </Badge>
                )}
                {lesson.status === 'current' && (
                  <Button 
                    className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white"
                    onClick={() => setActiveLesson(lesson.id)}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Continue Learning
                  </Button>
                )}
                {lesson.status === 'locked' && (
                  <Badge className="rounded-full bg-gray-300 text-gray-700">
                    <Lock className="mr-1 h-3 w-3" />
                    Complete previous lessons to unlock
                  </Badge>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Interactive Lesson Modal */}
      {activeLesson && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-3xl w-full p-8 rounded-3xl shadow-2xl bg-white max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">
                {subject.lessons.find((l: any) => l.id === activeLesson)?.icon}
              </div>
              <h2 className="text-3xl mb-2 text-purple-700">
                {subject.lessons.find((l: any) => l.id === activeLesson)?.title}
              </h2>
              <p className="text-gray-600">
                {subject.lessons.find((l: any) => l.id === activeLesson)?.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-4 text-gray-800">Let's Learn Together!</h3>
                <p className="text-gray-700 mb-6">
                  This is an interactive lesson space. Here you would have videos, 
                  animations, and fun activities to learn the topic!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="text-3xl mb-2">📹</div>
                    <div className="text-sm text-gray-700">Watch Video</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="text-3xl mb-2">🎮</div>
                    <div className="text-sm text-gray-700">Play Game</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="text-3xl mb-2">✏️</div>
                    <div className="text-sm text-gray-700">Practice</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="text-3xl mb-2">📝</div>
                    <div className="text-sm text-gray-700">Take Quiz</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => setActiveLesson(null)}
              >
                Close
              </Button>
              <Button 
                className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white"
                onClick={() => {
                  setActiveLesson(null);
                  setCurrentPage('quizzes');
                }}
              >
                Take Quiz
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
