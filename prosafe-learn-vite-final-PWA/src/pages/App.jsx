// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import MyIntroduction from './pages/MyIntroduction';
import InterviewPreparation from './pages/InterviewPreparation';
import MockTests from './pages/MockTests';
import AITools from './pages/AITools';
import ModulesPage from './pages/ModulesPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-introduction" element={<MyIntroduction />} />
            <Route path="/interview-preparation" element={<InterviewPreparation />} />
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}