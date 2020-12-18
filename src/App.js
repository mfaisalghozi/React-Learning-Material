import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome';
import Hello from './component/Hello';


function App() {
  return (
    <div className="App">
      <Greet name="Ghozi" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Indira" heroName="Wonder Woman">
        <button>Testing</button>
      </Greet>
      <Greet name="Alma" heroName="Catwoman"/>

      <Welcome name="Ghozi1" heroName="Batman3"/>
      <Welcome name="Ghozi2" heroName="Batman2"/>
      <Welcome name="Ghozi3" heroName="Batman1"/>

      {/* <Hello /> */}
    </div>
  );
}

export default App;
