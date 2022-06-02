import { useState } from 'react'
const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const Anecdote = ({anecdote}) => {
  return (
    <p><i>{anecdote}</i></p>
  )
}
const AnecdoteStatistic = ({votes, index}) => {
  return (
    <p>This anecdote has {votes[index]} votes</p>
  )
}
const DailyAnecdote = (props) => {

}

const MostPopularAnecdote = ({votes,anecdotes}) => {
  

  return (
    <h1></h1>
  )
}
const App = () => {
  const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
    
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))
  const selectAnecdote = () => {
    const length=anecdotes.length
    const randomInt = Math.floor(Math.random() * length)
    console.log("Rolled anecdote ",randomInt)
    setSelected(randomInt)
  }

  const updateVotes = () => {

    let tempVotes={ ...votes }
    tempVotes[selected] += 1
    setVotes(tempVotes)
  }

  return (
    <div>
      <h2>Quote of the day:</h2>
      <Anecdote anecdote={anecdotes[selected]} />
      <AnecdoteStatistic votes={votes} index={selected} />
      <DailyAnecdote anecdotes={anecdotes} />
      <br />
      <Button text="Vote" onClick={updateVotes} />
      <Button text="Get new quote" onClick={selectAnecdote} />
      <br />
      <MostPopularAnecdote votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App