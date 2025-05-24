import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);

  const activeQuestion = userAnswers.length;
  const quizIsComplete = activeQuestion === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUsersAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
    },
    []
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  // ✅ Only return AFTER all hooks
  if (quizIsComplete) {
    return (<Summary userAnswers={userAnswers}/>);
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}