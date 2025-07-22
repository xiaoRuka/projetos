import { BookOpen, Clock, Play, Trophy } from "lucide-react";
import { useDispatch } from "react-redux";
import { startQuiz } from "../store/quizSlice";

export function QuizStart() {
  const dispatch = useDispatch();

  //start quiz
  const handleStartQuiz = () => {
    dispatch(startQuiz());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6">
            <BookOpen className="w-12 h-12" />
          </div>
          <h1 className="text-4x1 font -bold text-gray-800 mb-4">
            Teste de Conhecimentos Gerais
          </h1>
          <p className="text-xl text-gray-600 ,mb-8 max-w-2xl mx-auto">
            Teste seu conhecimento sobre diversos assuntos
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-800 mb-2">8</div>
            <div className="text-2xl font-medium">Questions</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-blue-800 mb-2">5:00</div>
            <div className="text-2xl font-medium">Minutes</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-800 mb-2">100%</div>
            <div className="text-2xl font-medium">Max Score</div>
          </div>
        </div>

        {/* Rules */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Quiz Rules
          </h3>
          <div className="text-left bg-gray-50 p-6 rounded-xl max-w-2xl mx-auto">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  1
                </span>
                <span>As questões são de múltipla escolha</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  2
                </span>
                <span>Você tem 5 minutos para responder todas as questões</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  3
                </span>
                <span>
                  Quando você escolher a sua opção será exibida a explicação
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  4
                </span>
                <span>Você pode navegar para as questões anteiores</span>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="inline-flex items-center space-x-3 py-4 px-8 bg-gradient-to-r from blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold text-lg cursor pointer"
          onClick={handleStartQuiz}
        >
          <Play size={24} />
          <span>Start Quiz</span>
        </button>
      </div>
    </div>
  );
}
