/*
Excercises 2.1-2.5
*/
import Curriculum from './components/Curriculum'

const App = (props) => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const courses2 = [
    {
      name: 'Cybersecurity Basics',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of Cybersecurity',
          exercises: 11,
          id: 1
        },
        {
          name: 'JavaScript basics',
          exercises: 23,
          id: 2
        }
      ]
    }, 
    {
      name: 'Penetration Testing',
      id: 2,
      parts: [
        {
          name: 'Kali Linux',
          exercises: 3,
          id: 1
        },
        {
          name: 'Social Engineering',
          exercises: 14,
          id: 2
        }
      ]
    }
  ]

return (
  <div>
    <Curriculum key="WebDev" name="Web Development" courses={courses} />
  </div>
)
}

export default App