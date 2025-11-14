import { useState } from "react";

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.from({ length: anecdotes.length }, () => 0),
  );

  // produces a random int from 0 to max - 1
  const getRandomInt = (max) => Math.floor(Math.random() * max);

  // Selects an anecdote at random
  const handleNextAnecdote = () => setSelected(getRandomInt(anecdotes.length));

  // Add one vote to the current selected anecdote
  const handleVote = () => {
    const votesCopy = [...votes];

    votesCopy[selected]++;

    setVotes(votesCopy);
  };

  return (
    <section>
      <p>{anecdotes[selected]}</p>
      <Button name="next anecdote" onClick={handleNextAnecdote} />
      <Button name="vote" onClick={handleVote} />
    </section>
  );
};

export default App;
