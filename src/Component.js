import React, { Component } from 'react';
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import {next, prev, saveNext, reset, checkQuestions} from './Actions'

export const Head = ({image}) => {
    return (
      <Row className='text-center'>
        <Col mdOffset={3}  md={6} mdOffset={3}>
          <img src={image} alt="imagen"/>
        </Col>
      </Row>
    );
}

export const Progress = ({totalAnswers, totalQuestions}) => {
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

export const Quiz = ({question, options, answered}) => {
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

export const Socials = () => {
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

  export const Navs = ({answers, actualQuestion }) => {
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

  export const Resume = ({check, correct, questions, userAnswers}) => {
      return (
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
                {check && <button className='btn btn-default btn-lg' onClick={reset}>Start Again</button>} }
                {!check && <button className='btn btn-default btn-lg' onClick={checkQuestions}>Enviar</button>}
            </div>
            </Col>
        </Row>
    );    
  }