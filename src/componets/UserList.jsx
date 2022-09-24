import React,{useState,useEffect} from 'react'
import {Container, Row, Col, Table } from 'react-bootstrap';
import { UserService } from '../Services/UserService';

const UserList = () => {
    let [state,setState] = useState({
        users : []
    });

    useEffect(()=>{
        UserService.getAllUsers().then((resp)=>{
            setState({
                ...state,
                users: resp.data
            })
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return (
        <>
            <Container className='mt-3'>
                <Row>
                    <Col>
                        <h3 className='text-primary'>User List</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aliquam consectetur alias possimus accusantium earum, soluta sint dolores voluptate voluptates.</p>
                    </Col>
                    <Row>
                        <Col>
                            <Table striped className='shadow-lg text-center' >
                                <thead>
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Website</th>
                                        <th>Company</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        state.users.length > 0 &&
                                        state.users.map(user=>{
                                            return(
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.website}</td>
                                                    <td>{user.company.name}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default UserList