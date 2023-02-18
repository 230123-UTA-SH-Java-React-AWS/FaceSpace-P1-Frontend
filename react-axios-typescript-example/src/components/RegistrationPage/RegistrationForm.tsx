import { createContext, useContext, useState, Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./RegistrationForm.css"
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import { type } from "os";

type Prop = {};

type State = {
    email:string,
    password:string,
    firstName:string,
    lastName:string,
    img?:string
};

export class Registeration extends Component<Prop, State> {

};

function Registration() {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
  };

    return <div className= "center">
        <Form className= "formFormat" noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="First name"/>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name"/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address </Form.Label>
                <Form.Control required type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create a Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Your Picture</Form.Label>
                <Form.Control type="file" />
            </Form.Group>

            <br></br>
            <Button variant="primary" type="submit" onSubmit={console.log}>
                Register
            </Button>

        </Form>
    </div>
}

export default Registration;