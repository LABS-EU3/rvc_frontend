import React from 'react';
import {  Route } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Welcome}/>
      <Route path='/login' component={ FormikLoginForm}/>
      <Route path='/register' component={ FormikRegisterForm}/>
    </div>
  );
}


export default App;
