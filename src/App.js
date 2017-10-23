import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
// import {} from 'Actions.js';

const App = ({questions, selected}) => {
  return (
      <div>
        <h1>Funciona</h1>
      </div>
  );
}

const mapToProps = ({questions, selected}) => ({questions, selected});

export default connect(mapToProps)(App);
