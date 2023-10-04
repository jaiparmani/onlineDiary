import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function FormFloatingLayoutExample({subjectOptions, createPost}) {
    const [text, setText] = useState()
    const [subject, setSubject] = useState()

    return (
        <Row className="g-2">
            
            <Col md>
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Works with selects"
                >
                    <Form.Select aria-label="Floating label select example" onChange={e => setSubject(e.target.value)}>
                        <option value="">SELECT</option>

                        {subjectOptions.map((el) =>(
                            <option value={el.id}>{el.subject}</option>
                            // console.log(el.) 
                        ))}
                    </Form.Select>
                </FloatingLabel>
            </Col>x
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" onChange={e => setText( e.target.value )}/>
                </FloatingLabel>
            </Col>
            <Col md>
                <Button variant="primary" onClick={()=>
                    createPost( subject, text)
                    }>Primary</Button>{' '}

            </Col>
        </Row>
    );
}

export default FormFloatingLayoutExample;