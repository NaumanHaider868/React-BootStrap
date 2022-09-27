import React from 'react'
import { Grid, Typography, Paper, TextField } from '@mui/material'
import { Container, Stack, Form,Button, Alert } from 'react-bootstrap'
import { Box } from '@mui/system'

function Login() {
    return (
        <>
            <Paper style={{ boxSizing: 'border-box', textAlign: 'center', justifyContent: 'center', display: 'flex', paddingTop: '25px', paddingBottom: '90px', backgroundColor: 'rgb(225, 227, 235)', height: '100vh' }}>
                <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', minHeight: '520px', width: '35%', boxShadow: 'rgb(207, 207, 207) 11px 12px 13px 12px', paddingTop: '30px', backgroundColor: 'white', borderRadius: '60px' }}>

                    <Box style={{ display: 'flex' }}></Box>
                    <Box>
                        <Typography variant='h4' style={{ paddingTop: '24px', fontFamily:'inherit' }}>Login Page</Typography>
                        <Box style={{ marginTop: '40px' }}>
                            <Form.Control placeholder='Email' style={{ paddingLeft: '70px', marginBottom: '20px', fontSize: '22px', boxShadow: 'inset 0px 0px 25px 0px #888', width: '350px', borderRadius: '20px', height: '50px' }} type="text" />
                            <Form.Control placeholder='Password' style={{ paddingLeft: '70px', fontSize: '22px', boxShadow: 'inset 0px 0px 25px 0px #888', width: '350px', borderRadius: '20px', height: '50px' }} type="text" />
                        </Box>
                        <Box style={{ marginTop: '20px' }}>
                            <div className="d-grid gap-2">
                                <Button  style={{backgroundColor:'#007bffb', textAlign:'center',borderRadius:'20px',fontSize:'22px', border:'none'}}>
                                    Login
                                </Button>
                            </div>
                        </Box>

                        <Box style={{marginTop:'20px'}}>
                            <Typography style={{fontSize:'20px'}}>If you dont have account click <Alert.Link href="#" style={{fontSize:'20px', fontWeight:'500'}}>Register</Alert.Link></Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}

export default Login