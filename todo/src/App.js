import './styles/App.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DropDown from './components/DropDowns';
function App() {
  const [todoList, setTodo] = useState([]);
  const [Ttitle, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <div className="App d-flex flex-column">
      <h1 className="mt-3">Your ToDo App</h1>
      <div className="container-fluid mx-0 px-0">
        <div className="Todo__Res mx-5">
          <h2>Your ToDo List</h2>
          <div className="List">
            <ul className="Todo__List">
              {todoList ? todoList.map((item, index) => <li key={index}>{item.title}<DropDown desc={item.desc}/></li>) : 0}
            </ul>
          </div>
        </div>
        <div className="Todo__Add mx-5">
          <h2>Add Your ToDo</h2>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Take Jack to School..." onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Buy him a cake..." onChange={e => setDesc(e.target.value)} onDefault={desc} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => {
              e.preventDefault();
              const kk = {
                title: Ttitle,
                desc: desc
              }
              setTodo([...todoList, kk]);
            }}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
