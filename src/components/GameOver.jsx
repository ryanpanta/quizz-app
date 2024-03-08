import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">
            <h2>Fim de jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>
                Você acertou {quizState.score} de {quizState.questions.length}{" "}
                perguntas.
            </p>
            {quizState.score >= 8 && (
                <p className="feedback">Parabéns, você arrasou 💪</p>
            )}
            {quizState.score <= 4 && (
                <p className="feedback">
                    Você está indo bem, que tal tentar novamente? 🥰
                </p>
            )}
            <img src={WellDone} alt="Fim do Quiz" />
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>
                Reiniciar
            </button>
        </div>
    );
};

export default GameOver;
