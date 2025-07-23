import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  isQuizCompleted: false,
  score: 0,
  timeLeft: 300,
  isTimerActive: false,
  showExplanation: false,
};

const quizSlice = createSlice({
  name: "Quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },

    startQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = [];
      state.isQuizCompleted = false;
      state.score = 0;
      state.timeLeft = 300;
      (state.isTimerActive = true), (state.showExplanation = false);
    },

    answerQuestions: (state, action) => {
      const currectQuestion = state.questions[state.currentQuestionIndex];
      const isCorrect = action.payload.selectedOption === currectQuestion.correctAnswer;

      const answer = {
        questionId: currectQuestion.id, 
        selectedOption: action.payload.selectedOption,
        isCorrect
      };

      state.answers.push[answer];

      if(isCorrect){
        state.score += 1;
      }
    }

    decreamentTimer: (state) => {
      if (state.timeLeft > 0 && state.isTimerActive) {
        state.timeLeft -= 1;
      } else if (state.timeLeft === 0) {
        (state.isQuizCompleted = true), (state.isTimerActive = false);
      }
    },
  },
});

export const { setQuestions, startQuiz, decreamentTimer, answerQuestions} = quizSlice.actions;

export default quizSlice.reducer;
