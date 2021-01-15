import { Button } from 'react-bootstrap'
import {Delete} from '../indexddb';
export default function DeleteButton({ id }) {
    return (
        <>
            {<Button variant="outline-danger" onClick={() => Delete(id)}>Delete</Button>}
        </>
    );
}