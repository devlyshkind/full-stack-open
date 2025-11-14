import { useState } from "react";

const Title = ({ name }) => <h2>{name}</h2>;

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

  const maxVotes = Math.max(...votes);

  // produces the index of the anecdote with more votes
  // a tie produces the first of the anecdote in the tie
  const getMoreVoted = () => votes.indexOf(Math.max(...votes));

  const anecdoteMostVoted = getMoreVoted();

  // Selects an anecdote at random
  const handleNextAnecdote = () => setSelected(getRandomInt(anecdotes.length));

  // Add one vote to the current selected anecdote
  const handleVote = () => {
    const votesCopy = [...votes];

    votesCopy[selected]++;

    setVotes(votesCopy);
  };

  return (
    <main>
      <section>
        <Title name="Anecdote of the day" />
        <p>{anecdotes[selected]}</p>
        <Button name="vote" onClick={handleVote} />
        <Button name="next anecdote" onClick={handleNextAnecdote} />
      </section>
      <section>
        <Title name="Anecdote with most votes" />
        <p>{`"${anecdotes[anecdoteMostVoted]}" has ${maxVotes} votes`}</p>
      </section>
    </main>
  );
};

export default App;
