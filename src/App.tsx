import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Sidebar from './components/common/Sidebar';
import ExerciseList from './components/exercises/ExerciseList';
import ExerciseDetail from './components/exercises/ExerciseDetail';
import { ExerciseProvider, useExercises } from './contexts/ExerciseContext';
import './App.css';

const App: React.FC = () => {
  return (
    <ExerciseProvider>
      <AppContent />
    </ExerciseProvider>
  );
};

// Separate component to consume the context
const AppContent: React.FC = () => {
  const { view, setView } = useExercises();
  
  return (
    <div className="App">
      <Header />
      <main className="app-main">
        <Sidebar />
        <div className="content-area">
          {view === 'list' ? (
            <section className="exercise-list-section">
              <ExerciseList />
            </section>
          ) : (
            <section className="exercise-detail-section">
              <ExerciseDetail />
              <button 
                className="view-toggle" 
                onClick={() => setView('list')}
              >
                Back to Exercise List
              </button>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;