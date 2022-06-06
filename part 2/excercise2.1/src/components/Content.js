import Part from './Part'
const Content = (props) => {
//console.log(props.courseID)
  //console.log(props.parts)
  const sumOfParts = (sum, part) => {
    const returnValue= sum+part.exercises
    return returnValue
  }
  
 const total = props.parts.reduce(sumOfParts,0)
 //console.log(total)
 //console.log(parts)
 //parts.map(part => console.log(part.name))
 return(
    <div>
      {
        props.parts.map(part => <Part key={props.courseID+"_"+part.id} name={part.name} exercises={part.exercises} />
        )
      }
      Total of {total} exercises.
    </div>
  )
}
export default Content