import React from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useSelector } from "react-redux";

function Questions() {
  const { questions, currentQuestionIndex, answers, showExplanation } =
    useSelector((state) => state.quiz);

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers.find(
    (answer) => answer.questionId == currentQuestion.id
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-realxed">
            {currentQuestion.question}
          </h2>
          {/*Display Dynamic Answer*/}
          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = currentAnswer?.selectedOption === index;
              const isCorrect = index == currentQuestion.correctAnswer;
              const isWrong = isSelected && !isCorrect && showExplanation;

              let buttonClass = `w-full p4 text-left rounde-xl border-1 border-gray-300 transition-all duration-200`;

              if (showExplanation) {
                if (isCorrect) {
                  buttonClass += `border-green-500 bg-green-50 text-green-800`;
                } else if (isWrong) {
                  buttonClass += `border-red-500 bg-red-50 text-red-800`;
                } else {
                  buttonClass += `border-gray-200 bg-gray-50 text-gray-600`;
                }
              } else if (isSelected) {
                buttonClass += `border-blue-200 bg-blue-50 text-blue-800`;
              } else {
                buttonClass += `border-gray-200 bg-white text-gray-700 hover: border-blue-300 hover:shadow-md`;
              }

              return (
                <button key={index}>
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/*Show explanation */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-blue" />
            </div>
            <div className="ml-3">
              <p className="text-blue-800 font-medium">Explicação:</p>
              <p className="text-blue-700 mt-1">Explicação da questão atual</p>
            </div>
          </div>
        </div>
        {/*Display the Buttons*/}
        <div className="flex justify-between items-center">
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-5 disabled:cursor-not-allowed transition-all duration-200">
            <ArrowLeft size={20} />
            <span>Anterior</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-5 disabled:cursor-not-allowed transition-all duration-200">
            <ArrowRight size={20} />
            <span>Próxima</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
