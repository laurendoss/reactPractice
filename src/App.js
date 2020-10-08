import React, {Component} from 'react';
import './App.css';
import Person from './components/Person/Person'

class App extends Component {
  
  render(){
  return (
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a create react app!'))
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <Person />
      </div>
  );
}}

export default App;
