import { useRef } from "react";

export default function Answers({answers,selectedAnswer,answerState,onSelect}){
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return(
        <ul id="answers">
          {shuffledAnswers.current.map((option) => {
            let cssClasses = "";
            const isSelected = selectedAnswer === option;
            if (answerState === "answered" && isSelected) {
              cssClasses = "selected";
            }

            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClasses = answerState;
            }

            return (
              <li className="answer" key={option}>
                <button
                  onClick={() => onSelect(option)}
                  className={cssClasses}
                  disabled={answerState !== ""}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
    )
}