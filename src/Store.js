import createStore from 'redux-zero';

let AllQuestions = [
    {
        id: 1,
        question: `¿Cuál es la aerolínea más antigua del mundo?`,
        options: [
            "Avianca", "KLM", "Qantas"
        ],
        correct: "KLM",
        img: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg"
    }, {
        id: 2,
        question: `¿Cuál es el puerto más grande del mundo?`,
        options: [
            "Puerto de Singapur", "Puerto de Rotterdam", "Puerto de Shangai"
        ],
        correct: "Puerto de Shangai",
        img: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/ship.svg"
    }, {
        id: 3,
        question: `¿Cuál es la distancia más larga en bicicleta hacia atrás?`,
        options: [
            "89.30 km", "675.10 km", "337.60 km"
        ],
        correct: "337.60 km",
        img: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bycicle.svg"
    }, {
        id: 4,
        question: `¿Cuál es la velocidad más alta alcanzada nunca por un autobús escolar?`,
        options: [
            "590 km/h", "320 km/h", "245 km/h"
        ],
        correct: "590 km/h",
        img: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bus.svg"
    }, {
        id: 5,
        question: `¿Cuál es el viaje más largo con un tanque de gas?`,
        options: [
            "2,617 km", "3,568 km", "1,732 km"
        ],
        correct: "2,617 km",
        img: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/car.svg"
    }
];

const initialState = {
    questions : AllQuestions,
    answers : [],
    actualQuestion : 0,
    correct : 0,
    check: false,
    answered: false
};

const store = createStore(initialState);

export default store;
