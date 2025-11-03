// produces the header of the app
const Header = (props) => <h1>{props.name}</h1>;

const Part = (props) => (
  <p>
    {props.name} {props.exercises}
  </p>
);

// produces the content of the app
const Content = ({ data }) => {
  return (
    <div>
      <Part name={data[0].name} exercises={data[0].exercises} />
      <Part name={data[1].name} exercises={data[1].exercises} />
      <Part name={data[2].name} exercises={data[2].exercises} />
    </div>
  );
};

const Total = ({ data }) => {
  const total = data[0].exercises + data[1].exercises + data[2].exercises;

  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const parts = [
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
  ];

  return (
    <div>
      <Header name={course} />
      <Content data={parts} />
      <Total data={parts} />
    </div>
  );
};

export default App;
