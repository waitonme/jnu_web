import React, { Component } from 'react';
import { Header, Popup } from '../../components';
import { Login, Signup } from '../';
import { Button } from 'semantic-ui-react';



class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupVisibility: false,
            login: false,
            PopupLabel: null,

        };
    }

    clickHandler = (e) => {
        console.dir(e.target.name);
        if (e.target.className === 'close link icon Popup-Close') {
            this.setState({
                popupVisibility: false
            })
        } else if (e.target.name === "signup") {
            this.setState({
                popupVisibility: true,
                PopupLabel: < Signup close={this.clickHandler} />
            })
        }
        else {
            this.setState({
                popupVisibility: true,
                PopupLabel: <Login close={this.clickHandler} />
            })
        }
    }

    changeButtonSet = () => (
        this.state.login ? (
            <Button.Group >
                <Button content='UserState' icon="user" color="teal" />
            </Button.Group>
        ) : (
                <Button.Group >
                    <Button content='Sign in' name="signin" onClick={this.clickHandler} color="teal" />
                    <Button content='Get started' name="signup" onClick={this.clickHandler} color="teal" />
                </Button.Group>
            )
    )

    render() {

        const { popupVisibility, PopupLabel } = this.state;
        return (
            <Header >
                {this.changeButtonSet()}
                <Popup visible={popupVisibility} >
                    {PopupLabel}
                </Popup>
            </Header>
        );
    }
}

export default HeaderContainer;