const Header = (props) => {
return (
<h1>{props.course}</h1>

)
}
const Part = (props) => {
return (
  <p>{props.name} {props.parts}</p>
)
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
<Part name={props.name1} parts={props.parts1} />
<Part name={props.name2} parts={props.parts2} />
<Part name={props.name3} parts={props.parts3} />
</div>
)
}

const TotalParts = (props) => {
  console.log(props)
return (
  <p>Number of exercises is {props.parts}</p>
)
}

const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
  <div>
    <Header course={course} />
    <Content name1={part1} parts1={exercises1} name2={part2} parts2={exercises2} name3={part3} parts3={exercises3} />
    <TotalParts parts={exercises1 + exercises2 +exercises3} />
  </div>
)
}

export default App