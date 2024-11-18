import { useState } from 'react'

const Header = () => {
  return(
  <h1>Give us your feedback:</h1>
  ) 
}

const Subtitle = () => {
  return(
  <h2>Statistics so far:</h2>
  ) 
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total ? ((props.good * 1 - props.bad * 1) / total).toFixed(2) : 0
  const positive = total ? ((props.good / total) * 100).toFixed(2) : 0

  if (total === 0) {
    return <p>No feedback yet. We'd love to hear from you!</p>
  }

  return (
    <div>
    <table>
      <tbody>
        <StatisticLine text='Good:' value={props.good} />
        <StatisticLine text='Neutral:' value={props.neutral} />
        <StatisticLine text='Bad:' value={props.bad} />
        <StatisticLine text='Total:' value={total} />
        <StatisticLine text='Average:' value={average} />
        <StatisticLine text='Positive:' value={positive + ' %'} />
      </tbody>
    </table>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <Subtitle />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App