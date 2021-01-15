import './styles/App.css';
import { useState,useEffect } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import DropDown from './components/DropDowns';
import DeleteButton from './components/DeleteButton';
import {Add,Retrive} from './indexddb';
function App() {
  const [todoList, setTodo] = useState([]);
  const [checked,setCheck]=useState({});
  const [Ttitle, setTitle] = useState('');
  const [desc, setDesc] = useState('No Description');
  useEffect(()=>{
    setTodo(Retrive()); 
  },[])
  return (
    <div className="App d-flex flex-column">
      <h1 className="mt-3">Your ToDo App</h1>
      <div className="container-fluid mx-0 px-0">
        <div className="Todo__Res mx-5">
          <h2>Your ToDo List</h2>
          <div className="List">
            <ul className="Todo__List">
              {todoList.map((item) => <li key={item.id}>
                <ListGroup>
                  <ListGroup.Item><input type="checkbox" onClick={(e)=>{
                    if(e.target.checked){setCheck(item);console.log(item);}
                  }}/>{item.title}<DropDown desc={item.desc} /><DeleteButton id={item.id}/></ListGroup.Item>
                </ListGroup>
              </li>)}
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
              const obj = {
                title: Ttitle,
                desc: desc,
                id:Math.random()
              }
              Add(obj);
              setTodo([...todoList, obj]);
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
