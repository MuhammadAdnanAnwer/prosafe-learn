import { useEffect } from 'react';

export default function InterviewPreparation() {
  useEffect(() => {
    document.title = 'Interview Preparation - ProSafe Learn';
  }, []);

  const questions = [
    {
      question: 'What is a risk assessment?',
      answer: 'A risk assessment is a systematic process of evaluating the potential risks that may be involved in a projected activity or undertaking.',
    },
    {
      question: 'What is the difference between hazard and risk?',
      answer: 'Hazard is something that can cause harm, while risk is the likelihood that the harm will actually be done.',
    },
    {
      question: 'What is PTW (Permit to Work)?',
      answer: 'PTW is a formal written system used to control certain types of work that are potentially hazardous.',
    },
    {
      question: 'What is the hierarchy of controls?',
      answer: 'It is a system used to minimize or eliminate exposure to hazards. The hierarchy includes: Elimination, Substitution, Engineering Controls, Administrative Controls, and PPE.',
    },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#065f46' }}>
        HSE Interview Preparation
      </h1>
      
      {questions.map((item, index) => (
        <div key={index} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
          <h3 style={{ marginBottom: '0.5rem', color: '#047857' }}>{index + 1}. {item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p>More questions coming soon. Stay tuned!</p>
      </div>
    </div>
  );
}