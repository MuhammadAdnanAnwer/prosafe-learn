import { useEffect, useState } from 'react';

export default function MockTests() {
  useEffect(() => {
    document.title = 'Mock Tests - ProSafe Learn';
  }, []);

  const questions = [
    {
      question: 'What is the primary purpose of a fire extinguisher?',
      options: [
        'To clean equipment',
        'To suppress fire',
        'To evacuate people',
        'To alert the fire department'
      ],
      answer: 'To suppress fire'
    },
    {
      question: 'What does PPE stand for?',
      options: [
        'Professional Protection Equipment',
        'Personal Protective Equipment',
        'Public Property Enforcement',
        'Portable Pressure Equipment'
      ],
      answer: 'Personal Protective Equipment'
    }
  ];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mock Tests</h1>
      {questions.map((q, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="font-semibold">{q.question}</h2>
          <ul className="list-disc list-inside mt-2">
            {q.options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
          <p className="mt-2 text-green-700">Answer: {q.answer}</p>
        </div>
      ))}
    </div>
  );
}
