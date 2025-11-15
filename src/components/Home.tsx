import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles, BookOpen, Trophy, Star } from 'lucide-react';
import { Page } from '../App';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12 py-12">
        <div className="inline-block mb-6 animate-bounce">
          <div className="text-7xl">🚀</div>
        </div>
        <h1 className="text-5xl mb-4 text-purple-700">
          Welcome to MiniScholars!
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Learn, Play, and Grow with Fun Interactive Lessons!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg"
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg transform hover:scale-105 transition-all"
            onClick={() => setCurrentPage('subjects')}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Start Learning!
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="rounded-full border-purple-500 text-purple-600 hover:bg-purple-50"
            onClick={() => setCurrentPage('quizzes')}
          >
            <Trophy className="mr-2 h-5 w-5" />
            Take a Quiz
          </Button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBoYXBweXxlbnwxfHx8fDE3NjMwMDkzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kids Learning"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 border-0 shadow-lg rounded-3xl transform hover:scale-105 transition-all cursor-pointer">
          <div className="text-center">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl mb-2 text-orange-700">Fun Subjects</h3>
            <p className="text-gray-700">Explore Math, Science, and English with exciting lessons!</p>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-100 to-teal-100 border-0 shadow-lg rounded-3xl transform hover:scale-105 transition-all cursor-pointer">
          <div className="text-center">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-xl mb-2 text-teal-700">Interactive Games</h3>
            <p className="text-gray-700">Learn through fun quizzes and interactive activities!</p>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 border-0 shadow-lg rounded-3xl transform hover:scale-105 transition-all cursor-pointer">
          <div className="text-center">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl mb-2 text-purple-700">Track Progress</h3>
            <p className="text-gray-700">See your achievements and earn cool badges!</p>
          </div>
        </Card>
      </div>

      {/* Quick Access Section */}
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-6 text-center text-purple-700">
          What would you like to learn today?
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Button
            className="h-auto py-6 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white flex flex-col gap-2"
            onClick={() => setCurrentPage('subjects')}
          >
            <span className="text-4xl">🔢</span>
            <span className="text-lg">Math</span>
          </Button>
          <Button
            className="h-auto py-6 rounded-2xl bg-green-500 hover:bg-green-600 text-white flex flex-col gap-2"
            onClick={() => setCurrentPage('subjects')}
          >
            <span className="text-4xl">🔬</span>
            <span className="text-lg">Science</span>
          </Button>
          <Button
            className="h-auto py-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white flex flex-col gap-2"
            onClick={() => setCurrentPage('subjects')}
          >
            <span className="text-4xl">📖</span>
            <span className="text-lg">English</span>
          </Button>
        </div>
      </div>

      {/* Fun Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { icon: '👨‍🎓', count: '10,000+', label: 'Happy Students' },
          { icon: '📝', count: '500+', label: 'Fun Lessons' },
          { icon: '🏆', count: '50+', label: 'Achievements' },
          { icon: '⭐', count: '4.9', label: 'Rating' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 text-center shadow-md">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-purple-600">{stat.count}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
