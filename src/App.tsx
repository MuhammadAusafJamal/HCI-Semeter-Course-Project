import React,{ useState } from 'react';
import { Home } from './components/Home';
import { Subjects } from './components/Subjects';
import { Lessons } from './components/Lessons';
import { Quizzes } from './components/Quizzes';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';
import { Header } from './components/Header';

export type Page = 'home' | 'subjects' | 'lessons' | 'quizzes' | 'dashboard' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'subjects':
        return <Subjects setCurrentPage={setCurrentPage} setSelectedSubject={setSelectedSubject} />;
      case 'lessons':
        return <Lessons selectedSubject={selectedSubject} setCurrentPage={setCurrentPage} />;
      case 'quizzes':
        return <Quizzes setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard />;
      case 'about':
        return <About />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pb-8">
        {renderPage()}
      </main>
    </div>
  );
}
