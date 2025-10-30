// to represent all parts composing the course
const data = {
  // to represent a part of the course
  part1: {
    name: "Fundamentals of React",
    exercises: 10,
  },
  part2: {
    name: "Using props to pass data",
    exercises: 7,
  },
  part3: {
    name: "State of a component",
    exercises: 14,
  },
};

// produces the header of the app
const Header = (props) => <h1>{props.name}</h1>;

// produces the content of the app
const Content = (props) => {
  const { part1, part2, part3 } = props.data;

  return (
    <>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  // an iterator representing all parts composing the course
  const parts = Object.values(props.data);
  const total = parts.reduce((acc, part) => part.exercises + acc, 0);

  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  return (
    <div>
      <Header name={course} />
      <Content data={data} />
      <Total data={data} />
    </div>
  );
};

export default App;
