import Greeting from './Greatting'
import Welcome from './Welcome';
import './App.css';



function App() {
  return (
    <div className="App">
      <Welcome user="MrGX" age={21+14}/>
      <Greeting message="K1 TECH" name="welcome"/>
    </div>
  );
}

export default App;
