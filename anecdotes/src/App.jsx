import { useState } from 'react'

const Header = () => {
  return (
    <h1>Anecdote of the day:</h1>
  )
}

const Subtitle = () => {
  return (
    <h2>Anecdote with most votes:</h2>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(5).fill(0))

  const handleVotes = () => {
    const newVote = [...votes]
    newVote[selected] += 1
    setVotes(newVote)
  }

  const handleAnecdote = () => {
    let randomAnecdote
    do { randomAnecdote = Math.floor(Math.random() * anecdotes.length) }
    while (randomAnecdote === selected)
    setSelected(randomAnecdote)
  }

  const maxVote = Math.max(...votes)
  const mostVoted = votes.reduce((acc, vote, index) => {
    if (vote === maxVote) acc.push(index);
    return acc;
  }, []);

  const anecdotes = [

    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'The only way to go fast, is to go well.'
  ]

  return (
    <div>
      <Header />
      <p>{anecdotes[selected]}</p>
      <p>has <strong>{votes[selected]}</strong> votes</p>
      <Button handleClick={handleVotes} text='Vote' />
      <Button handleClick={handleAnecdote} text='Next Anecdote' />
      <Subtitle />
      <div>
        {maxVote > 0 ? (
          mostVoted.length > 1 ? (

            // If there's more than one anecdote tied for the highest votes.
            <div>
              <p>There is a tie between the following anecdotes:</p>
              <ul>
                {mostVoted.map(index => (
                  <li key={index}>{anecdotes[index]} (with <strong>{maxVote}</strong> votes)</li>
                ))}
              </ul>
            </div>
          ) : (
            // If theres's only one anecdote with the highest votes.
            <div>
              <p>{anecdotes[mostVoted[0]]}</p>
              <p>has <strong>{maxVote}</strong> votes</p>
            </div>
          )
        ) : (
          // If there are no votes yet.
          <p>There are no votes yet.</p>
        )}
      </div>
    </div>
  )
}

export default App