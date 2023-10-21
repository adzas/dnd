import React, { Component } from 'react';

class BeginningButton extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: props.name,
        };
    };

    handleClick = () => {
        // this.setState({isClicked: true})
    };

    render() {

        let btnClass = this.state.isClicked ? 'd-none' : '';
        let btnName = this.state.name;
        
        return (
            <button
                className={`
                    main-menu-btn-style
                    rules-button
                    main-menu-btn-animate-style
                    ${btnClass}
                `}
                onClick={this.handleClick}
            >
                {btnName}
            </button>
        );
    }
}

export default BeginningButton;
