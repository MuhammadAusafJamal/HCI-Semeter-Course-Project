import { BookOpen, Home, BookMarked, Trophy, BarChart3, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const navItems = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'subjects' as Page, label: 'Subjects', icon: BookOpen },
    { id: 'lessons' as Page, label: 'Lessons', icon: BookMarked },
    { id: 'quizzes' as Page, label: 'Quizzes', icon: Trophy },
    { id: 'dashboard' as Page, label: 'Progress', icon: BarChart3 },
    { id: 'about' as Page, label: 'About', icon: Info },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md transform hover:scale-110 transition-transform">
              <span className="text-2xl">🎓</span>
            </div>
            <h1 className="text-white text-2xl">MiniScholars</h1>
          </div>
          
          <nav className="flex flex-wrap gap-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                onClick={() => setCurrentPage(id)}
                variant={currentPage === id ? 'secondary' : 'ghost'}
                className={`rounded-full transition-all ${
                  currentPage === id 
                    ? 'bg-white text-purple-600 hover:bg-white hover:text-purple-700 shadow-md scale-105' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
