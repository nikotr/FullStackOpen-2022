/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

const Header = () => {
return (
  <h1>React-Appi</h1>
)
}
const footer = () => {
  return (
    <h1>Testi</h1>
  )
}

const Hello = () => {
  return (
    <div>
      <p>Iltaa kaverit.</p>
    </div>
    )
}
const MoroMoro = (props) => {
  return (
    <div>
      <p>Iltaa {props.name}.</p>
    </div>
    )

}

const ArrayTesti = () => {

return [
  <h1>Greetings</h1>,
  <h1>Greetings</h1>,
  <h1>Greetings</h1>
]

}

const SiisKuinkaVanha = (props) => {
  console.log(props)
  return (
    <div>
      <p>Iltaa {props.name}. Olet {props.age} vuotta vanha.</p>
    </div>
    )

}

const App = () => {
  console.log('Hello from component')
  const now = new Date()
  console.log(now.toString())
  const a = 8
  const b = 19
  const nimi="Tomi"
  const nimi2="Niko"
  return (
  <div>
    <Header />
    <ArrayTesti />
    <p>onko jätkiä näkynyt?</p>
    <p>Kello on {now.toString()}</p>
    <p>
      {a} plus {b} on yhteensä {a+b}
    </p>
    <Hello />
    <SiisKuinkaVanha name={nimi} age={a} />
    <SiisKuinkaVanha name="Otto" age="32" />
    <SiisKuinkaVanha name={nimi2} age={a+b} />
    <Hello />
    <MoroMoro name="Keijo" />
    <MoroMoro name="Joni" />
    <MoroMoro name="Henri" />
    <Hello />
    <footer />
  </div>
  )
  }

export default App
