import './styles/App.css';
function App() {
  return (
    <div className="App d-flex flex-column">
      <h1 className="mt-3">Your ToDo App</h1>
      <div className="container-fluid mx-0 px-0">
        <div className="Todo__Res mx-5">
          <h2>Your ToDo List</h2>
          <ul className="Todo__List">
            <li>Nothing</li>
          </ul>
        </div>
        <div className="Todo__Add mx-5">
          <h2>Add Your ToDo Here</h2>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default App;
