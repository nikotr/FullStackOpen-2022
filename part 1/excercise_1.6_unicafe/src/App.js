import {useState} from 'react'

const DisplayFeedback = ({type, value}) => {
return (
<tr><td>{type} </td><td>{value}</td></tr>
)
} 
const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  console.log(props)
  const feedbackGood=props.good
  const feedbackBad=props.bad
  const feedbackNeutral=props.neutral
  
  const totalFeedback = () => {
    return feedbackBad+feedbackGood+feedbackNeutral
  }
  const averageFeedback = () => {
    /*
      good = 1
      bad = -1
      neutral = 0
    */
      if (totalFeedback() == 0) {
        return 0
       }
     
   const average=(feedbackGood-feedbackBad)/totalFeedback()
   return average
  }
  
  const positivePercentage = () => {
    if (totalFeedback() == 0) {
      return 0
    }
  const percentage = (feedbackGood / totalFeedback())*100
  return percentage
  
  }

  if (totalFeedback()==0) {
    return (
<div>No feedback given!</div>

    )
  }

  return (
    <div>
    <h1>Statistics</h1>
      <table>
        <tbody>
  <DisplayFeedback type="Good" value={feedbackGood} />
  <DisplayFeedback type="Neutral" value={feedbackNeutral} />
  <DisplayFeedback type="Bad" value={feedbackBad} />
  <DisplayFeedback type="Total" value={totalFeedback()} />
  <DisplayFeedback type="Average" value={averageFeedback()} />
  <DisplayFeedback type="Positive" value={positivePercentage() + " %"} />
  </tbody>
  </table>
  </div>
  )
}

const App = () => {
  const [feedbackGood, setGood] = useState(0)
  const [feedbackNeutral, setNeutral] = useState(0)
  const [feedbackBad, setBad] = useState(0)
  const incrementGood = () => {
    setGood(feedbackGood + 1)
    console.log("Left good feedback!")
  }
  const incrementBad = () => {
    setBad(feedbackBad + 1)
    console.log("Left bad feedback!")
  }
  const incrementNeutral = () => {
    setNeutral(feedbackNeutral + 1)
    console.log("Left neutral feedback!")
  }


  return (
    <div className="feedback_app">
      <div className="Unicafe feedback">
        <h1>Please leave some feedback</h1>
        <Button onClick={incrementGood} text="Good" />
        <Button onClick={incrementNeutral} text="Neutral" />
        <Button onClick={incrementBad} text="Bad =(" />
      </div>
    <div className="statistics">
      <Statistics good={feedbackGood} neutral={feedbackNeutral} bad={feedbackBad} />
    </div>
    </div>
  )
}

export default App
