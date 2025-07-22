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
  },
});

export const { setQuestions, startQuiz } = quizSlice.actions;

export default quizSlice.reducer;
