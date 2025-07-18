import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Route, Routes } from "react-router-dom";
const App = () => {
  const [mode, setMode] = useState('light'); // Whether darkmode is enabled or not, using useState hook
  const [cmode, setcolorMode] = useState('red');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' #1c2833  ';
      showAlert("Dark mode has been enabled", "success");
      //document.title = 'TextUtils - Dark Mode';
      //setInterval(() => {
      //  document.title = 'TextUtils is Amazing';
      //},2000);
      //setInterval(() => {
      //  document.title = 'Install TextUtils Now';
      //},1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      //document.title = 'TextUtils - Light Mode';
    }
  }
  const colorMode = () => {
    if (cmode === 'green') {
      setcolorMode('red');
      document.body.style.backgroundColor = '#7b241c';
      showAlert("Red Dark mode has been enabled", "success");
    }
    else if (cmode === 'red') {
      setcolorMode('green');
      document.body.style.backgroundColor = '#0e6655';
      showAlert("Green Dark mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} cmode={cmode} colorMode={colorMode} />
      <Alert alert={alert} />
      
      <div className="container my-3">
        <Routes>
          {/* /users --> Component 1
              /users/home --> Component 2 */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces, Extract Email,Convert Case, Copy and Clear Text" mode={mode} />} />
          <Route exact path="about" element={<About mode={mode}/>} />
        </Routes>
        {/*<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />*/}
      </div>
    </>
  )
}

export default App;
