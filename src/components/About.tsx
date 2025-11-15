import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Heart, Users, Target, BookOpen, Sparkles } from 'lucide-react';

export function About() {
  const team = [
    { name: 'Ms. Sarah', role: 'Math Teacher', emoji: '👩‍🏫', color: 'from-blue-400 to-blue-600' },
    { name: 'Mr. Saad', role: 'Science Teacher', emoji: '👨‍🔬', color: 'from-green-400 to-green-600' },
    { name: 'Mr. Uzair', role: 'English Teacher', emoji: '👩‍💼', color: 'from-orange-400 to-orange-600' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Fun Learning',
      description: 'We make learning enjoyable with games and interactive activities',
      color: 'text-pink-500',
    },
    {
      icon: Users,
      title: 'Kid-Friendly',
      description: 'Designed specifically for children ages 6-12 with simple navigation',
      color: 'text-purple-500',
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Track progress and achieve learning goals step by step',
      color: 'text-blue-500',
    },
    {
      icon: Sparkles,
      title: 'Engaging Content',
      description: 'Colorful designs and animations that keep kids excited',
      color: 'text-yellow-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🎓</div>
        <h1 className="text-4xl mb-4 text-purple-700">About MiniScholars</h1>
        <p className="text-xl text-gray-700">Where Learning Meets Fun!</p>
      </div>

      {/* Mission Section */}
      <Card className="max-w-4xl mx-auto mb-12 p-8 rounded-3xl shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center">
          <div className="text-5xl mb-4">🌟</div>
          <h2 className="text-3xl mb-4 text-purple-700">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At MiniScholars, we believe that every child deserves access to fun and engaging education. 
            Our mission is to make learning an exciting adventure where kids can explore, discover, and grow 
            at their own pace. Through interactive lessons, colorful designs, and rewarding achievements, 
            we inspire young minds to love learning!
          </p>
        </div>
      </Card>

      {/* Feature Image */}
      <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1633219664502-f7c0ad898f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHBsYXlmdWx8ZW58MXx8fHwxNzYzMDU5NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kids Learning"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Values */}
      <div className="mb-12">
        <h2 className="text-3xl mb-8 text-center text-purple-700">What Makes Us Special</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6 rounded-3xl shadow-lg bg-white text-center transform hover:scale-105 transition-all">
                <Icon className={`h-12 w-12 mx-auto mb-4 ${value.color}`} />
                <h3 className="text-xl mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="mb-12">
        <h2 className="text-3xl mb-8 text-center text-purple-700">Meet Our Teachers</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden rounded-3xl shadow-lg bg-white transform hover:scale-105 transition-all">
              <div className={`h-32 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                <div className="text-6xl">{member.emoji}</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl mb-2 text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 mb-12 shadow-xl">
        <h2 className="text-3xl mb-8 text-center text-white">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '10,000+', label: 'Happy Students', emoji: '👨‍🎓' },
            { number: '500+', label: 'Fun Lessons', emoji: '📚' },
            { number: '50+', label: 'Achievements', emoji: '🏆' },
            { number: '100%', label: 'Fun Guaranteed', emoji: '🎉' },
          ].map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <div className="text-3xl mb-1">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <Card className="max-w-4xl mx-auto p-8 rounded-3xl shadow-lg bg-white">
        <div className="text-center">
          <Mail className="h-12 w-12 mx-auto mb-4 text-purple-500" />
          <h2 className="text-3xl mb-4 text-purple-700">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have questions? We'd love to hear from you! Parents and teachers can reach out to us anytime.
          </p>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-800">hello@MiniScholars.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="text-gray-800">0302-000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-gray-800">123 Learning Street, Education City</p>
                </div>
              </div>
            </div>
          </div>

          <Button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg">
            <Mail className="mr-2 h-4 w-4" />
            Send Us a Message
          </Button>
        </div>
      </Card>

      {/* Footer Message */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
          {/* <Heart className="h-5 w-5 text-red-500 fill-current" /> */}
          <span className="text-gray-700">Made with love for young learners</span>
          <Heart className="h-5 w-5 text-red-500 fill-current" />
        </div>
      </div>
    </div>
  );
}
