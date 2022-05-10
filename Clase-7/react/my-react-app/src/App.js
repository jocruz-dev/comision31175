
import './App.css';
import NavBar from './components/NavBar';
import Function from './components/Function';
import Class from './components/Class';
import List from './components/List';
import { useEffect } from 'react';

function App() {

const peticionAPI = ["pancho", "ruben","pancho", "ruben","pancho", "ruben"]

// const options = {
//   'Access-Control-Allow-Origin': '*'
// }

useEffect(()=>{
  fetch('http://localhost:3002/').then((res)=>res.json()).then((res)=> console.log(res))
},[])

  return (
    <div className="App">
      <Function items={peticionAPI}></Function>
      <NavBar></NavBar>
      <List data={peticionAPI}></List>
    </div>
  );
}

export default App;
