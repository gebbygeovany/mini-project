import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'

function LoginPage(props) {
    return (
        <Grid textAlign='center' style={{ height: '100vh', marginTop: 100 }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header textAlign='center'>
                    <span className="logoLogin">Login to your account</span>
                </Header>
                <Form size='large' >
                    <Segment style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                        <Form.Input
                            fluid
                            icon='mail'
                            iconPosition='left'
                            placeholder='Email'
                            name="email"
                            // value={values.email}
                            // error={errors.email ? true : false}
                            // onChange={onChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            name="password"
                            // value={values.password}
                            // error={errors.password ? true : false}
                            // onChange={onChange}
                        />

                        <Button secondary fluid size='large' as={Link} to="/home/ ">
                            Login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}


export default LoginPage;