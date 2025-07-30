import ProgressBar from "./Progressbar";
import { QuizStart } from "./QuizStart";
import Timer from "./Timer";
import Questions from "./Questions";
import Results from "./Results";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sampleQuestions } from "../components/data/questions";
import { setQuestions } from "../store/quizSlice";

export function Quiz() {
  const dispatch = useDispatch();

  //load question
  useEffect(() => {
    dispatch(setQuestions(sampleQuestions));
  }, dispatch);

  const {
    questions,
    currentQuestionIndex,
    isQuizCompleted,
    isTimerActive,
    answers,
  } = useSelector((state) => state.quiz);

  // loading quiz
  if (questions.length == 0) {
    return (
      <div className="min-h-screen bg-gradient to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading</p>
        </div>
      </div>
    );
  }

  //is completed quiz
  if (isQuizCompleted) {
    return (
      <div className="min-h-screen bg-gradient to-br from-blue-50 via-white to-purple-50 py-6 px-4">
        <Results />
      </div>
    );
  }

  //QuizStart

  if (!isTimerActive && answers.length == 0) {
    console.log(sampleQuestions);
    return (
      <div className="min-h-screen bg-gradient to-br from-blue-50 via-white to-purple-50 py-6 px-4 ">
        <QuizStart />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from blue via-white to-puple-py-8 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1">
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={questions.length}
            />
          </div>
          <div className="md:ml-6">
            <Timer />
          </div>
        </div>
      </div>
      <Questions />
    </div>
  );
}
