import React from 'react'
import { Container, Navbar, Card } from 'react-bootstrap'

function _Navbar() {
    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand>
                        <div className='bag'>
                            <img src='../assets/img/Vector13425.png' />
                            <p><a className='_bold'>B</a>ean<a className='_bold'>B</a>ag</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Brand className='MicImg'>
                        <div className='img-box'>
                            <img className='imgx' src='../assets/img/head-2-img.png'/>
                            <img className='imgx' src='../assets/img/Vector.png' />
                        </div>
                        <p className='Micp'>Microsoft</p>
                    </Navbar.Brand>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default _Navbar