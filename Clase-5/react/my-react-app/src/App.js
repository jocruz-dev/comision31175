
import './App.css';
import NavBar from './components/NavBar';
import Function from './components/Function';
import Class from './components/Class';
import List from './components/List';

function App() {

  const arr = ["pancho", "ruben"]

  return (
    <div className="App">
      <NavBar></NavBar>
      <List></List>
      <Function></Function>
    </div>
  );
}

export default App;
