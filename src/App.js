import React, {Component} from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import plane from "./img/plane.svg";
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import {next, prev, saveNext, reset, checkQuestions} from './Actions'

const Head = ({image}) => {
  return (
    <Row className='text-center'>
      <Col mdOffset={3}  md={6} mdOffset={3}>
        <img src={image} alt="imagen"/>
      </Col>
    </Row>
  );
}

const Progress = ({totalAnswers, totalQuestions}) => {
  return (
    <Row className="estado" id="progreso">
    <Col md={12} xs={12}>
      <div>
        {totalAnswers} de {totalQuestions} preguntas contestadas
      </div>
      <ProgressBar now={totalAnswers * 20} />
    </Col>
  </Row>
  );
}

const Quiz = ({question, options, answered}) => {
  return (
    <div>
      <Row>
        <Col md={12}>
          <h1 className="text-center titulo">{question}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {options}
        </Col>      
      </Row>
    </div>
  );
}

const Socials = () => {
  return ( 
    <Row>
      <Col mdOffset={3} md={6} id='redesSociales'>
        <span className="fa-stack fa-lg ">
                <i className="fa fa-circle fa-stack-2x fa-inverse fa-2x twitter"></i>
                <i className="fa fa-twitter fa-stack-1x"></i>
          </span>
          <span className="fa-stack fa-lg ">
                <i className="fa fa-circle fa-stack-2x fa-inverse fa-2x facebook"></i>
                <i className="fa fa-facebook fa-stack-1x"></i>
          </span>
          <span className="fa-stack fa-lg ">
                <i className="fa fa-circle fa-stack-2x fa-inverse fa-2x google"></i>
                <i className="fa fa-google-plus fa-stack-1x"></i>
          </span>
      </Col>
    </Row>
  );
}

const Navs = ({answers, actualQuestion }) => {
  return (
    <div id="flechas" className="text-center">
      <button id="anterior" className={{answers} >=  {actualQuestion} && {actualQuestion}?'btn':"btn disabled"} onClick={prev}>
            <img className="img-responsive" src='https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-left-arrow.svg' />
      </button>
      <button id="siguiente" className={{answers} >  {actualQuestion} ? 'btn':"btn disabled"} onClick={next}>
            <img className="img-responsive" src="https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-right-arrow.svg" />
      </button>
    </div>

  ) ;

}

const Resume = ({check, correct, questions, userAnswers}) => {
  <Row>
    <Col md={12} className='pregunta'>
      <h1 className="titulo">
        {!check && 'Estas son tus respuestas'}
        {check && correct + 'de ' + questions.length + 'correctas!!'}
      </h1>
      <div>
        <span>{userAnswers}</span>
      </div>
      <div className='text-center'>
        {!check && <button className='btn btn-default btn-lg' onClick={reset}>Start Again</button>} }
        {check && <button className='btn btn-default btn-lg' onClick={checkQuestions}>Enviar</button>}
      </div>
    </Col>
  </Row>
}

const App = ({questions, answers, actualQuestion, correct, check, answered}) => {
  
  const items = questions[actualQuestion].options.map((choise, index) => {
    const abc = ["A", "B", "C"];
    return (
      <Row className="text-center">
        <Col md={12} className='seleccionado' >
          <button
            className='btn btn-block btn-abc text-center opciones'
            id={index}
            onClick={() => saveNext(choise)}
            >
              <span>{abc[index]}</span> {choise}
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
        {! answered && <Head image={questions[actualQuestion].img}/>}
        {answered && <Head image={"https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/truck.svg"}/>} 
      </div>
      <Progress totalAnswers={answers.length} totalQuestions={questions.length} />
      <div className="pregunta">
        {! answered && 
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
