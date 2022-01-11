import Todo from "./components/Todo";
// Basic react app by Prashanth Kuntlapalli
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      {/* Todo Component*/}
      <Todo title="Learn React" />
      <br></br>
      {/* Todo Component*/}
      <Todo title="Learn NodeJs" />
    </div>
  );
}

export default App;
