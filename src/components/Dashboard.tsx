import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Trophy, Star, BookOpen, Target, TrendingUp } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Lessons Completed', value: 12, total: 30, icon: BookOpen, color: 'blue' },
    { label: 'Quizzes Taken', value: 8, total: 15, icon: Trophy, color: 'yellow' },
    { label: 'Stars Earned', value: 45, total: 100, icon: Star, color: 'purple' },
    { label: 'Current Streak', value: 5, total: 7, icon: Target, color: 'green' },
  ];

  const subjects = [
    { name: 'Math', progress: 60, emoji: '🔢', color: 'bg-blue-500', lessons: 15 },
    { name: 'Science', progress: 45, emoji: '🔬', color: 'bg-green-500', lessons: 12 },
    { name: 'English', progress: 30, emoji: '📖', color: 'bg-orange-500', lessons: 9 },
  ];

  const achievements = [
    { title: 'First Steps', description: 'Completed your first lesson', icon: '👣', earned: true },
    { title: 'Quick Learner', description: 'Completed 5 lessons', icon: '⚡', earned: true },
    { title: 'Math Wizard', description: 'Scored 100% in Math quiz', icon: '🧙', earned: true },
    { title: 'Reading Star', description: 'Read 10 stories', icon: '📚', earned: false },
    { title: 'Science Explorer', description: 'Complete all Science lessons', icon: '🚀', earned: false },
    { title: 'Perfect Week', description: 'Learn every day for a week', icon: '🏆', earned: false },
  ];

  const recentActivity = [
    { action: 'Completed', item: 'Addition Quiz', time: '2 hours ago', emoji: '✅' },
    { action: 'Started', item: 'Science Lesson: Plants', time: '1 day ago', emoji: '🌱' },
    { action: 'Earned', item: 'Math Wizard Badge', time: '2 days ago', emoji: '🏆' },
    { action: 'Completed', item: 'Subtraction Lesson', time: '3 days ago', emoji: '✅' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">📊</div>
        <h1 className="text-4xl mb-4 text-purple-700">Your Progress Dashboard</h1>
        <p className="text-xl text-gray-700">See how awesome you're doing!</p>
      </div>

      {/* Stats Overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const percentage = (stat.value / stat.total) * 100;
          
          return (
            <Card key={index} className="p-6 rounded-3xl shadow-lg bg-white transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`h-8 w-8 text-${stat.color}-500`} />
                <Badge className={`rounded-full bg-${stat.color}-100 text-${stat.color}-700`}>
                  {stat.value}/{stat.total}
                </Badge>
              </div>
              <h3 className="text-lg text-gray-700 mb-2">{stat.label}</h3>
              <Progress value={percentage} className="h-2 rounded-full" />
            </Card>
          );
        })}
      </div>

      {/* Subject Progress */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card className="p-6 rounded-3xl shadow-lg bg-white">
          <h2 className="text-2xl mb-6 text-purple-700 flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            Subject Progress
          </h2>
          <div className="space-y-6">
            {subjects.map((subject, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{subject.emoji}</span>
                    <span className="text-gray-800">{subject.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{subject.lessons} lessons completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={subject.progress} className="h-3 rounded-full flex-1" />
                  <span className="text-sm text-gray-600 w-12">{subject.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6 rounded-3xl shadow-lg bg-white">
          <h2 className="text-2xl mb-6 text-purple-700 flex items-center gap-2">
            <Star className="h-6 w-6" />
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <span className="text-2xl">{activity.emoji}</span>
                <div className="flex-1">
                  <p className="text-gray-800">
                    <span className="text-purple-600">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="p-8 rounded-3xl shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50">
        <h2 className="text-3xl mb-6 text-center text-orange-700 flex items-center justify-center gap-2">
          <Trophy className="h-8 w-8" />
          Your Achievements
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`p-6 rounded-2xl text-center transition-all transform hover:scale-105 ${
                achievement.earned
                  ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-400 shadow-lg'
                  : 'bg-gray-100 opacity-60'
              }`}
            >
              <div className={`text-5xl mb-3 ${achievement.earned ? 'animate-bounce' : 'grayscale'}`}>
                {achievement.icon}
              </div>
              <h3 className={`mb-2 ${achievement.earned ? 'text-gray-800' : 'text-gray-600'}`}>
                {achievement.title}
              </h3>
              <p className={`text-sm ${achievement.earned ? 'text-gray-600' : 'text-gray-500'}`}>
                {achievement.description}
              </p>
              {achievement.earned && (
                <Badge className="mt-3 rounded-full bg-green-500 text-white">
                  ✓ Unlocked
                </Badge>
              )}
              {!achievement.earned && (
                <Badge className="mt-3 rounded-full bg-gray-400 text-white">
                  🔒 Locked
                </Badge>
              )}
            </Card>
          ))}
        </div>
      </Card>

      {/* Motivational Section */}
      <div className="mt-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl">
        <h2 className="text-3xl mb-4">🌟 Keep Up the Great Work! 🌟</h2>
        <p className="text-lg mb-4">
          You're doing amazing! Keep learning every day to unlock more achievements and become a super learner!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <div className="bg-white/20 rounded-2xl px-6 py-3">
            <div className="text-2xl mb-1">📅</div>
            <div className="text-sm">5 Day Streak!</div>
          </div>
          <div className="bg-white/20 rounded-2xl px-6 py-3">
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-sm">45 Stars Earned</div>
          </div>
          <div className="bg-white/20 rounded-2xl px-6 py-3">
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-sm">3 Badges</div>
          </div>
        </div>
      </div>
    </div>
  );
}
