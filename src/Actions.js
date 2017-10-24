import store from './Store.js';

export const next = () => {
    let actualQ = store.getState().actualQuestion;
    let questions = store.getState().questions;
    let answered = store.getState().answered;
    let answers = store.getState().answers;
    
    if(questions.length > actualQ + 1){
        actualQ++;       
    } else if (questions.length == answers.length){
        store.setState({
            answered: true
        });
        console.log("condicion");
        console.log(store.getState().answered);
    } else if (answered){
        actualQ++;
    }

    store.setState({
        actualQuestion : actualQ
    });
    

}

export const prev = () => {
    let actualQ = store.getState().actualQuestion;
    let questions = store.getState().questions;
    let answers = store.getState().answers;
    if(questions.length != answers.length){
        store.setState({
            answered: false
        });
    }
    const newPrevQ = actualQ - 1;
    store.setState({
        actualQuestion : newPrevQ
    })
}

export const saveNext = (value) => {
    let choise =[...store.getState().answers];
    let index = store.getState().actualQuestion;
    choise[index] = value;
    store.setState({
        answers : choise,
    });
    checkCorrect();
    let t = setTimeout(() => {
        next();
    }, 900);
}

export const checkQuestions = () => {
    store.setState({
        check: true
    })
}

export const checkCorrect = () => {
    let answers = store.getState().answers;
    let actualQ = store.getState().actualQuestion;
    let questions = store.getState().questions;
    let correct = store.getState().correct;
    if (answers[actualQ] == questions[actualQ].correct) {
        correct++;
    }
    store.setState({
        correct: correct
    })
}

export const reset = () => {
    store.setState({
        answers : [],
        actualQuestion : 0,
        correct : 0,
        check: false,
        answered: false
    });
}