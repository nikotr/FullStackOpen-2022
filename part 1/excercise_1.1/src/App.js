/*
Excercises 1.1 - 1.5 of full stack open and some testing while reading along
*/
import {useState} from 'react'
const Header = (props) => {
return (
<h1>{props.course.name}</h1>

)
}
const Part = (props) => {
return (
  <p>{props.name} {props.parts}</p>
)
}
const Content = (props) => {
  console.log(props)
  const courses = props.course.parts
  return (
    <div>
<Part name={courses[0].name} parts={courses[0].exercises} />
<Part name={courses[1].name} parts={courses[1].exercises} />
<Part name={courses[2].name} parts={courses[2].exercises} />
</div>
)
}

const TotalParts = (props) => {
  const courses=props.course.parts
  const exercises = courses[0].exercises + courses[1].exercises + courses[2].exercises
return (
  <p>Number of exercises is {exercises}</p>
)
}



const Hello1C = ({name,age}) => {

const bornYear = () => {
  const yearNow = new Date().getFullYear()
  //console.log(yearNow)
  const birthYear= yearNow - age
  /*
  console.log(props.age)
  console.log(birthYear)
  */
  return birthYear
}
return (
<div>
  <p>
    Moro {name}, olet {age} vuotta vanha, eli synnyit luultavasti vuonna {bornYear()}
  </p>
</div>

)

}

const StateTest = () => {
const [counter,setCounter] = useState(0)
setTimeout(
  () => setCounter(counter + 1), 1000
)
  return (
    <div>
      <p>
        {counter}
      </p>
    </div>
  )
}
const Display = ({value}) => <div>Nykyinen arvo on {value} </div>
const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>the app is used by pressing the buttons</div>
      ) }
  return (
  <div>button press history: {props.allClicks.join(' ')}</div>
)
}



const App = (props) => {
  const course = {
  name:'Half Stack application development',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
}
const methodTest = {
  name: "Arto",
  age: 35,
  greet: function() {
    console.log("Hello, my name is "+this.name + " and I am "+this.age+" years old.")
  },
  birthday: function() {
    this.age += 1
  }
}

//methodTest.greet()
//methodTest.birthday()
//methodTest.greet()
const bileet=methodTest.birthday
/*
bileet()
methodTest.greet()
*/
const ika=30
const [ counter, setCounter ] = useState(0)
const increaseByOne = () => setCounter(counter + 1)
const decreaseByOne = () => setCounter(counter - 1)
const setToZero = () => setCounter(0)
const setToInverted = () => setCounter(-1 * counter)

const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)



const [allClicks, setAll] = useState([])

const handleLeftClick = () => {
setAll(allClicks.concat('L')) 
setLeft(left + 1)
}

const handleRightClick = () => {
setAll(allClicks.concat('R'))
setRight(right + 1)
}
//const totalClicks = () => allClicks.length()

return (
  <div>
    <Header course={course} />
    <Content course={course} />
    <TotalParts course={course} />
    <br />
    <br />
    <hr></hr>
    <StateTest />
    <Hello1C name="Niko" age={ika} testi="testi" />
    <Display value={counter} />
    <Button onClick={increaseByOne} text="+1" />
    <Button onClick={decreaseByOne} text="-1" />
    <Button onClick={setToZero} text="nollaa" />
    <Button onClick={setToInverted} text="invert" />
    <br /><br />
    <Button onClick={handleLeftClick} text="vasen" />
    <Button onClick={handleRightClick} text="oikea" />
    <History allClicks={allClicks} />
    
  </div>
)
}

export default App