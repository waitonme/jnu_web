import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import * as checkUser from '../../services/users';

class Login extends Component {
    state = {
        id: null,
        password: null,
        fetching: false,
    }

    fetchId = async (Reqid) => {
        this.setState({
            fetching: true // requesting..
        });

        try {
            // wait for two promises
            const info = await Promise.all([
                checkUser.getID(Reqid)
            ]);

            // Object destructuring Syntax,
            // takes out required values and create references to them
            const { id, password } = info[0].data;
            console.log(id,password);

            this.setState({
                fetching: false // done!
            });

        } catch (e) {
            // if err, stop at this point
            this.setState({
                fetching: false
            });
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.dir(this.state);
        e.preventDefault();
    }

    signInHandler = (e) => {
        this.fetchId(this.state.id);
    }

    render() {
        return (
            <>
                <Form>
                    <Icon className="Popup-Close" link name='close' label="login" onClick={this.props.close} />
                    <Form.Field className="Popup-Field">
                        <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' name="id" onChange={e => this.changeHandler(e)} />
                        <Form.Input icon='key' iconPosition='left' label='Password' placeholder='Password' name="password" onChange={e => this.changeHandler(e)} type="password" />
                        <Form.Button className="Popup-Submit" content='Sign in' color="teal" type="submit" onClick={this.signInHandler} />
                    </Form.Field>
                </Form>
            </>
        );
    }
}

export default Login;