// produces the header of the app
const Header = ({ data }) => <h1>{data.name}</h1>;

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
);

// produces the content of the app
const Content = ({ data }) => {
  return (
    <div>
      <Part name={data.parts[0].name} exercises={data.parts[0].exercises} />
      <Part name={data.parts[1].name} exercises={data.parts[1].exercises} />
      <Part name={data.parts[2].name} exercises={data.parts[2].exercises} />
    </div>
  );
};

const Total = ({ data }) => {
  const total =
    data.parts[0].exercises + data.parts[1].exercises + data.parts[2].exercises;

  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header data={course} />
      <Content data={course} />
      <Total data={course} />
    </div>
  );
};

export default App;
