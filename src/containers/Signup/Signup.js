import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';

class Signup extends Component {
    state = {
        id: null,
        password: null,
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.dir(this.state);
    }

    render() {
        return (
            <>
                <Form>
                    <Icon className="Popup-Close" link name='close' label="Signup" onClick={this.props.close} />
                    <Form.Field className="Popup-Field">
                        <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' name="id" onChange={e => this.changeHandler(e)} />
                        <Form.Input icon='key' iconPosition='left' label='Password' placeholder='Password' name="password" onChange={e => this.changeHandler(e)} type="password" />
                        <Form.Button className="Popup-Submit" content='Sign Up' color="teal" type="submit" />
                    </Form.Field>
                </Form>
            </>
        );
    }
}

export default Signup;