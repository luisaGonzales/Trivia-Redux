import React, {Component} from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import plane from "./img/plane.svg";
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import {next, prev, saveNext, reset, checkQuestions} from './Actions'
import {Head, Progress, Quiz, Socials, Navs, Resume} from './Component'

const App = ({questions, answers, actualQuestion, correct, check, answered}) => {
  const items = questions[actualQuestion].options.map((choise, index) => {
    const abc = ["A", "B", "C"];
    return (
      <Row className="text-center">
        <Col md={12} >
          <button
            className='btn btn-block btn-abc text-center opciones'
            id={index}
            onClick={() => saveNext(choise)}
            >
              <span className="abc pull-left">{abc[index]}</span> {choise}
            <span className="seleccion"></span>
          </button>
        </Col>
      </Row>
    );
  });

  const totalAnswers = answers.map((user, indexAns) => {
    if(user == questions[indexAns].correct && check){
      return <p className="text-success">{indexAns + 1}. {questions[indexAns].question}<strong> {user}</strong></p>
    } else if (check){
      return <p className="text-danger">{indexAns + 1}. {questions[indexAns].question}<strong><strike> {user}</strike> {questions[indexAns].correct}</strong></p>
    } else {
      return <p>{indexAns + 1}. {questions[indexAns].question}<strong> {user}</strong></p>;
    }
  });

  return (
    <Grid className='quiz text-center'>
      <div>
        {!answered && <Head image={questions[actualQuestion].img}/>}
        {answered && <Head image={"https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/truck.svg"}/>} 
      </div>
      <div>
        {!check && <Progress totalAnswers={answers.length} totalQuestions={questions.length} />}
      </div>
      <div className="pregunta">
        {!answered && 
          <Quiz question={questions[actualQuestion].question} options={items} /> }
        {answered &&  
          <Resume check={check} correct={correct} questions={questions} userAnswers={totalAnswers} />}
        <Socials />
      </div>
      {!check && questions.length != 0 && 
        <Navs answers={answers.length} actualQuestion={actualQuestion} />
      }
    </Grid>
  );
}

const mapToProps = ({questions, answers, actualQuestion, correct, check, answered}) => ({questions, answers, actualQuestion, correct, check, answered});

export default connect(mapToProps)(App);
