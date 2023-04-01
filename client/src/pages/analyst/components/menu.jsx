import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';


import '../../../styles/userAnalystMenu.css'
const Menu = () => {
    return (
        <>
            <h3 className='text-center my-5'>GESTION DE RECURSOS HUMANOS</h3>
            <ListGroup >
                <ListGroup.Item action variant="secondary" className='text-black'>
                    <Link to="home" className='d-block'>Home</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary" className='text-black'>
                    <Link to="module1" className='d-block'>Modulo I - Selección y contratación</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                    Modulo II - Nómina
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                    Modulo III - Evaluaciónes y desempeños
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                    Modulo IV - Otros
                </ListGroup.Item>
            </ListGroup>
        </>
    )
};

export default Menu;