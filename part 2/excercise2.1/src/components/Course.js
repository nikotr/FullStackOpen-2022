import Header from './Header'
import Content from './Content'


const Course = ({course}) => {
  const course_ID="content_"+course.id
  return (
  <div>
    <Header key={"header_"+course.id} title={course.name} />
    <Content key={course_ID} courseID={course_ID} parts={course.parts} />
  </div>
  )

}

export default Course
