import { Component } from "react";

const logo = {
    name: 'DM-Helper',
    url: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: '90'
};

class Logo extends Component{
    constructor (props) {
        super(props);
        this.state = {
            isClicked: false
        };
    };
    
    hiddenLogo = () => {
        // this.setState({isClicked: true});
    }

    render() {
        let additionalClass = this.state.isClicked ? 'd-none' : '';

        return (
            <span className="logo-animate-style" onClick={this.hiddenLogo}>
                <img
                    className={`avatar ${additionalClass}`}
                    src={logo.url}
                    alt={'picture app '+logo.name}
                    style={{
                        witdh: logo.imageSize,
                        heigth: logo.imageSize
                    }}
                />
                <h1 className={additionalClass}>{logo.name}</h1>
            </span>
        );
    }
}

export default Logo;