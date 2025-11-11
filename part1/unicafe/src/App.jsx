import { useState } from "react";

const Title = ({ name }) => <h1>{name}</h1>;

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>;

const Display = ({ name, value }) => <p>{`${name} ${value}`}</p>;

const App = () => {
  const [countGood, setCountGood] = useState(0);
  const [countNeutral, setCountNeutral] = useState(0);
  const [countBad, setCountBad] = useState(0);

  const handleGoodButton = () => setCountGood((s) => s + 1);
  const handleNeutralButton = () => setCountNeutral((s) => s + 1);
  const handleBadButton = () => setCountBad((s) => s + 1);

  return (
    <main>
      <Title name="give feedback" />

      <Button name="good" onClick={handleGoodButton} />
      <Button name="neutral" onClick={handleNeutralButton} />
      <Button name="bad" onClick={handleBadButton} />

      <Title name="statistics" />

      <Display name="good" value={countGood} />
      <Display name="neutral" value={countNeutral} />
      <Display name="bad" value={countBad} />
    </main>
  );
};

export default App;
