import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 10) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={timeout} className={mode}/>
  );
}
