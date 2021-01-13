import './styles/App.css';
function App() {
  return (
    <div className="App d-flex flex-column">
      <h1 className="mt-3">Your ToDo App</h1>
      <div className="container mx-0 px-0 w-100 d-flex flex-row">
        <div className="Todo__Res">
          <h2>Your ToDo List</h2>
          <ul className="Todo__List">
            <li>Nothing</li>
          </ul>
        </div>
        <div className="Todo__Add">
          <h2>Add Your ToDo Here</h2>
          <p>hello</p>
        </div>
      </div>
      <p>kkkk</p>
    </div>
  );
}

export default App;
