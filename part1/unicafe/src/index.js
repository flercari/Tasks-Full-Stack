import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts

  return(
    <div>
      { parts.map((element, i) =>
        <Part key={i} name={element.name} exercises={element.exercises} />
      )}
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {

  const totales = props.totals

  const totalExercises = totales.reduce((prev, next) => prev + next.exercises, 0)

  return(
    <p>
      Number of exercises {totalExercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { 
      id: 1,
      name: 'Fundamentals of React',
      exercises : 10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total totals={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))