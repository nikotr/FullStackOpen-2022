import Course from './Course'
const Curriculum = ({name,courses}) => {
  
return (
  <div>
    <h1>{name} curriculum</h1>   
{
  courses.map(course =>
    <div>
      <Course key={"course_"+name.replace(" ","_")+"_"+course.id} course={course} />
    </div>
  )
}
  </div>
)
}

export default Curriculum