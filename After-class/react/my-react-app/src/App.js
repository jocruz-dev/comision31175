
import './App.css';
import NavBar from './components/NavBar';
import Function from './components/Function';
import Class from './components/Class';
import List from './components/List';

function App() {

  const arr = ["pancho", "ruben"]

  return (
    <div className="App">
      {/* <Function name={arr[0]}>
        <h1>HIJO</h1>
      </Function>
      <Class name="TEST"></Class> */}
      <NavBar></NavBar>
      <List></List>
    </div>
  );
}

export default App;
