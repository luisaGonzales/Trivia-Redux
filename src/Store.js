import createStore from 'redux-zero';

let ALLQUESTIONS = [
    {
        id: 1,
        question: `¿Cuál es la aerolínea más antigua del mundo?`,
        options: [
            "Avianca", "KLM", "Qantas"
        ],
        correct: "KLM",
        img: "img/plane.svg"
    }, {
        id: 2,
        question: `¿Cuál es el puerto más grande del mundo?`,
        options: [
            "Puerto de Singapur", "Puerto de Rotterdam", "Puerto de Shangai"
        ],
        correct: "Puerto de Shangai",
        img: "img/ship.svg"
    }, {
        id: 3,
        question: `¿Cuál es la distancia más larga en bicicleta hacia atrás?`,
        options: [
            "89.30 km", "675.10 km", "337.60 km"
        ],
        correct: "337.60 km",
        img: "img/bycicle.svg"
    }, {
        id: 4,
        question: `¿Cuál es la velocidad más alta alcanzada nunca por un autobús escolar?`,
        options: [
            "590 km/h", "320 km/h", "245 km/h"
        ],
        correct: "590 km/h",
        img: "img/bus.svg"
    }, {
        id: 5,
        question: `¿Cuál es el viaje más largo con un tanque de gas?`,
        options: [
            "2,617 km", "3,568 km", "1,732 km"
        ],
        correct: "2,617 km",
        img: "img/car.svg"
    }
];

const initialState = {
    questions : ALLQUESTIONS,
    selected : -1
};

const store = createStore(initialState);

export default store;