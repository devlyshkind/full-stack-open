import { useState } from "react";

const Title = ({ name }) => <h1>{name}</h1>;

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>;

const Display = ({ name, value }) => <p>{`${name} ${value}`}</p>;

const Stats = ({ stats }) => {
  if (stats.countAll === 0) {
    return <Title name="statistics" />;
  }
  return (
    <>
      <Title name="statistics" />

      <Display name="good" value={stats.countGood} />
      <Display name="neutral" value={stats.countNeutral} />
      <Display name="bad" value={stats.countBad} />
      <Display name="all" value={stats.countAll} />
      <Display name="average" value={stats.average} />
      <Display name="positive" value={stats.positivePercentage} />
    </>
  );
};

const App = () => {
  const [countGood, setCountGood] = useState(0);
  const [countNeutral, setCountNeutral] = useState(0);
  const [countBad, setCountBad] = useState(0);

  const countAll = countGood + countNeutral + countBad;
  const average = (countGood - countBad) / countAll;
  const positivePercentage = (countGood * 100) / countAll;

  const stats = {
    countGood,
    countNeutral,
    countBad,
    countAll,
    average,
    positivePercentage,
  };

  const handleGoodButton = () => setCountGood((s) => s + 1);
  const handleNeutralButton = () => setCountNeutral((s) => s + 1);
  const handleBadButton = () => setCountBad((s) => s + 1);

  return (
    <main>
      <Title name="give feedback" />

      <Button name="good" onClick={handleGoodButton} />
      <Button name="neutral" onClick={handleNeutralButton} />
      <Button name="bad" onClick={handleBadButton} />

      <Stats stats={stats} />
    </main>
  );
};

export default App;
