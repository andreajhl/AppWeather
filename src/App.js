import React from 'react';
import {Route} from 'react-router-dom'
import './styles/App.scss';
import Nav from './components/Nav/Nav.jsx';
import Home from './components/home/home'
import Ciudad from './components/Cuidad/Ciudad'

function App() {

  return (
    <div className="App">
      <Route 
          path='/'
          render={()=> <Nav />}
      /> 
      <Route  
      exact path='/' 
      render={()=> <Home/>}
      /> 
      <Route
      exact path ='/ciudad/:id'
      render={()=> <Ciudad />}
      />
    </div>
  );
}

export default App;
