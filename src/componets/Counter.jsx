import React,{useState} from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

let Counter = () => {

    let [one,setOne] = useState({
        count : 0,
    })

    let incr = () => {
        setOne({
            count : one.count + 1
        })
    }

    let denc = () => {
        setOne({
            count : one.count - 1
        })
    };

    return (
        <>
          <Container className='mt-3'>
            <Col xs={6}>
            <Card className='shadow-lg'>
                <Card.Body>
                    <p className='display-5'>{one.count}</p>
                    <Button variant='success' className='m-1' onClick={incr} >Increment</Button>
                    <Button variant='warning' onClick={denc} >Increment</Button>
                </Card.Body>
            </Card>
            </Col>
          </Container>
        </>
    )
}

export default Counter