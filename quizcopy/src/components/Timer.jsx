import { Clock } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreamentTimer } from "../store/quizSlice";

function Timer() {
  const dispatch = useDispatch();
  const { timeLeft, isTimerActive } = useSelector((state) => state.quiz);

  useEffect(() => {
    let interval;

    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        dispatch(decreamentTimer());
      }, 1000);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  }, [dispatch, isTimerActive, timeLeft]);

  // Get Timer colors

  const getTimerColor = () => {
    if (timeLeft > 120) return "text-green-600";
    if (timeLeft > 60) return "text-yellow-600";
    return "text-red-600";
  };

  // Step 1

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${min.toString().padStart(2, 0)}: ${secs
      .toString()
      .padStart(2, 0)}`;
  };

  return (
    <div className={`flex items-cent space-x-2 ${getTimerColor()}`}>
      <Clock size={20} />
      <span className="font-mono text-lg font-semibold">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}

export default Timer;
