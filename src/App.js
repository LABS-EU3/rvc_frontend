import React from 'react';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <FormikLoginForm />
      <FormikRegisterForm />
      <h1> WELCOME TO FORKBOOK</h1>
    </div>
  );
}

export default App;
