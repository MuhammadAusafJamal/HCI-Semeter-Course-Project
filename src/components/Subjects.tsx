import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Star } from 'lucide-react';
import { Page } from '../App';

interface SubjectsProps {
  setCurrentPage: (page: Page) => void;
  setSelectedSubject: (subject: string) => void;
}

export function Subjects({ setCurrentPage, setSelectedSubject }: SubjectsProps) {
  const subjects = [
    {
      id: 'math',
      name: 'Math',
      emoji: '🔢',
      description: 'Numbers, counting, addition, subtraction, and more!',
      color: 'from-blue-400 to-blue-600',
      lessons: 25,
      image: 'https://images.unsplash.com/photo-1643748034218-620d189795d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYzMDU5NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'science',
      name: 'Science',
      emoji: '🔬',
      description: 'Explore animals, plants, space, and experiments!',
      color: 'from-green-400 to-green-600',
      lessons: 30,
      image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZXhwZXJpbWVudCUyMGNoaWxkcmVufGVufDF8fHx8MTc2MzAxMjk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'english',
      name: 'English',
      emoji: '📖',
      description: 'Reading, writing, stories, and fun vocabulary!',
      color: 'from-orange-400 to-orange-600',
      lessons: 28,
      image: 'https://images.unsplash.com/photo-1666888735993-6ed30a900f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBraWRzfGVufDF8fHx8MTc2MzA1OTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setCurrentPage('lessons');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">📚</div>
        <h1 className="text-4xl mb-4 text-purple-700">Choose Your Subject</h1>
        <p className="text-xl text-gray-700">Pick a subject and start your learning adventure!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {subjects.map((subject) => (
          <Card 
            key={subject.id}
            className="overflow-hidden border-0 shadow-xl rounded-3xl transform hover:scale-105 transition-all cursor-pointer bg-white"
            onClick={() => handleSubjectClick(subject.id)}
          >
            <div className={`h-48 bg-gradient-to-br ${subject.color} flex items-center justify-center relative`}>
              <ImageWithFallback
                src={subject.image}
                alt={subject.name}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute text-8xl">{subject.emoji}</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl mb-3 text-gray-800">{subject.name}</h3>
              <p className="text-gray-600 mb-4">{subject.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <span className="text-sm text-gray-600">{subject.lessons} lessons</span>
              </div>
              <Button 
                className={`w-full rounded-full bg-gradient-to-r ${subject.color} hover:opacity-90 text-white`}
                onClick={() => handleSubjectClick(subject.id)}
              >
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center shadow-xl">
          <h2 className="text-3xl mb-4">🌟 Learning is Fun! 🌟</h2>
          <p className="text-lg mb-6">
            Each subject has interactive lessons, fun quizzes, and exciting games. 
            Earn stars and badges as you learn!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="bg-white/20 rounded-2xl px-6 py-3">
              <div className="text-2xl">✅</div>
              <div className="text-sm">Easy to Follow</div>
            </div>
            <div className="bg-white/20 rounded-2xl px-6 py-3">
              <div className="text-2xl">🎯</div>
              <div className="text-sm">Interactive</div>
            </div>
            <div className="bg-white/20 rounded-2xl px-6 py-3">
              <div className="text-2xl">🏆</div>
              <div className="text-sm">Earn Rewards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
