import store from './Store.js';

export const next = (index) => {
    console.log(index);
    let actualQ = store.getState().actualQuestion;
    const newActualQ = actualQ + 1; 
    store.setState({
        actualQuestion : newActualQ
    })
}

export const prev = () => {
    let actualQ = store.getState().actualQuestion;
    const newPrevQ = actualQ - 1;
    store.setState({
        actualQuestion : newPrevQ
    })
}

export const saveNext = (index) => {
    let actualAnswers = store.getState().answers;
}