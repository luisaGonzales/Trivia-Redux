import React, {Component} from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
// import {} from 'Actions.js';
import plane from "./img/plane.svg";
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';

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
      <ProgressBar now={{totalAnswers} * 20} />
    </Col>
  </Row>
  );
}

const Quiz = ({question, options}) => {
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

const App = ({questions, selected, answers, actualQuestion}) => {
  
  const items = questions[actualQuestion].options.map((choise, index) => {
    return (
      <Row className="text-center">
        <Col md={12} className='seleccionado' >
          <button
            className='btn btn-block btn-abc text-center opciones'
            id={index}
            >
              {choise}
            <span className="seleccion"></span>
          </button>
        </Col>
      </Row>
    );
  })
  return (
    <Grid className='quiz text-center'>
      <Head image={questions[0].img}/>
      <Progress totalAnswers={answers.length} totalQuestions={questions.length}  />
      <div className="pregunta">
        <Quiz question={questions[actualQuestion].question} options={items} />
        <Socials />
      </div>
      
      
    </Grid>
  );
}

const mapToProps = ({questions, selected, answers, actualQuestion}) => ({questions, selected, answers, actualQuestion});

export default connect(mapToProps)(App);
