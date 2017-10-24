import store from './Store.js';

export const next = () => {
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

export const saveNext = (value) => {
    let choise =[...store.getState().answers];
    let index = store.getState().actualQuestion;
    choise[index] = value;
    store.setState({
        answers : choise,
    });
    let t = setTimeout(() => {
        next();
    }, 700);
}
