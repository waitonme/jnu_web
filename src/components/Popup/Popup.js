import React, { Component } from 'react';
import "./Popup.css";

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closing: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.visible && !nextProps.visible) {
            // visible props is changing from true -> false

            this.setState({
                closing: true
            });

            // 1 sec after
            setTimeout(
                () => {
                    this.setState({
                        closing: false
                    });
                }, 1000
            );
        }
    }


    render() {
        const { visible, children, PopupName } = this.props;
        const { closing } = this.state;

        if (!visible && !closing) return null;
        return (
            <div className="Popup-wrapper">
                <div className={`Popup ${closing ? 'bounceOut' : 'bounceIn'} animated`}>
                    {children}
                </div>
            </div >
        );
    }
}

export default Popup;