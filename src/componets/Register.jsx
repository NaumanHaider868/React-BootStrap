import React,{useState} from 'react'
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'

const Register = () => {

    let [state,setState] = useState({
        user : {
            username : '',
            email : '',
            password : ''
        }
    });

    let updateInput = (e) => {
        setState({
            ...state,
            user : {
                ...state.user,
                [e.target.name] : e.target.value
            }
        })
    };

    const register = (e) => {
        e.preventDefault();
        console.log(state.user)
    }

    return (
        <>
            {/* <pre>{JSON.stringify(state)}</pre> */}
            <Container className='mt-3'>
                <Row>
                    <Col md={6}>
                        <Card className='shadow-lg'>
                            <Card.Header className='p-3' style={{backgroundColor:'#ffc107'}} >
                                <h4>Register</h4>
                            </Card.Header>
                            <Card.Body style={{backgroundColor : '#f7f5f0'}}>
                                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi porro explicabo fuga. */}
                                <Form>
                                    <Form.Group className='mb-3'>
                                        <Form.Control name='username' onChange={updateInput} type='text' placeholder='Username' />
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Control name='email' onChange={updateInput} type='type' placeholder='Email' />
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Control name='password' onChange={updateInput} type='password' placeholder='Password' />
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Button onClick={register} variant='warning' type='submit'>Submit</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                            
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register