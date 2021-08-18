import React from 'react'
import {
    Container,
    List,
    Segment,
    Image
} from 'semantic-ui-react'


function Footer() {


    return (
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '4em 0em' }} attached='bottom'>
            <Container textAlign='center'>
                <Image centered src="https://react.semantic-ui.com/logo.png" size='mini' />
                <br></br>
                <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='#'>
                        Site Map
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Contact Us
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
                    </List.Item>
                </List>
            </Container>
        </Segment>
    )

}

export default Footer