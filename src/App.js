import React, {Component} from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
// import {} from 'Actions.js';
import plane from "./img/plane.svg";
import {Grid, Row, Col} from 'react-bootstrap';

const Head = ({image}) => {
  return (
    <Row className='text-center'>
      <Col mdOffset={3}  md={6} mdOffset={3}>
        <img src={image} alt="imagen"/>
      </Col>
    </Row>
  );
}

const Quiz = ({questionActual}) => {
  return (
    <Row className=''>

    </Row>
  );
}

const Progress = ({totalAnswers, totalQuestions}) => {
  <Row className="estado" id="progreso">
    <Col md={12} xs={12}>
      <div>
        {totalAnswers} de {totalQuestions} preguntas contestadas
      </div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuemax="100" style={{ width: {totalAnswers} * 20 + '%', height: '10px' }}></div>                                 
      </div>
    </Col>
  </Row>

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






const App = ({questions, selected}) => {
  return (
    <Grid className='quiz text-center'>
      <Head image={questions[0].img}/>
      <div className="contenido">
        <Socials />
      </div>
    </Grid>
  );
}

const mapToProps = ({questions, selected}) => ({questions, selected});

export default connect(mapToProps)(App);
