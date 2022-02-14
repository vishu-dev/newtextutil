//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1f1b50';
      showAlert("Dark mode is enabled", "success");
      document.title = 'Textutil Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'Textutil Light Mode';
    }
  }
  return (
   <>
   {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
   <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading=" Enter the Text to analyze below" mode={mode}/>
          </Route>
        </Switch>
    </div>
    </Router>
   </>
  );
}

export default App;
