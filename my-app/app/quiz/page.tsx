"use client"

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Define the quiz questions and correct answers
const questions = [
  {
    id: 1,
    question: "ARE DRUGS BAD",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    correctAnswer: "yes",
  },
  {
    id: 2,
    question: "ARE NOT DRUGS GOOD",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    correctAnswer: "yes",
  },
];

export default function Quiz() {
  // State to store user's answers
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  // State to track if the quiz has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Handle answer selection
  const handleChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      {questions.map((q) => (
        <div key={q.id} className="mb-6">
          <div className="flex items-center mb-2">
            <div className="font-bold mr-2">{q.id}.</div>
            <h3 className="text-lg">{q.question}</h3>
            {submitted && (
              <span className="ml-3">
                {answers[q.id] === q.correctAnswer ? (
                  <span className="text-green-500 text-xl">✓</span>
                ) : (
                  <span className="text-red-500 text-xl">✗</span>
                )}
              </span>
            )}
          </div>
          <RadioGroup
            value={answers[q.id] || ""}
            onValueChange={(value) => handleChange(q.id, value)}
            disabled={submitted} // Disable inputs after submission
          >
            {q.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2 mb-1">
                <RadioGroupItem value={option.value} id={`q${q.id}-${option.value}`} />
                <Label htmlFor={`q${q.id}-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
      {!submitted ? (
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      ) : (
        <div className="mt-4 text-center text-xl text-green-600">
          Thank you for submitting the quiz!
        </div>
      )}
    </form>
  );
}
