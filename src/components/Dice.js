import React from "react";
import Center from 'react-center';
import PropTypes from "prop-types";
import v0 from '../images/dice/value/0.png';
import v1 from '../images/dice/value/1.png';
import v2 from '../images/dice/value/2.png';
import v3 from '../images/dice/value/3.png';
import v4 from '../images/dice/value/4.png';
import v5 from '../images/dice/value/5.png';
import r0 from '../images/dice/rolling/0.png';
import r1 from '../images/dice/rolling/1.png';
import r2 from '../images/dice/rolling/2.png';
import r3 from '../images/dice/rolling/3.png';
import r4 from '../images/dice/rolling/4.png';

const values = [v0, v1, v2, v3, v4, v5];
const rollingValues = [r0, r1, r2, r3, r4];

class Dice extends React.Component {

    // TODO: Added non-passive event listener to a scroll-blocking 'touchstart' event.
    //  Consider marking event handler as 'passive' to make the page more responsive.
    constructor(props) {
        super(props);
        this.state = {
            image: rollingValues[0],
        };
        this.changeImage = this.changeImage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    changeImage(img) {
        if (img == null) {
            clearInterval(this.rollingTimer);
            return;
        }
        this.setState({
            image: img
        });
    }

    handleClick(value): void {
        if (value === 0) {
            return;
        }
        const imgs = [values[value - 1], ...rollingValues];
        this.rollingTimer = setInterval(() => {
            this.changeImage(imgs.pop());
        }, 120);
    }


    render() {
        const currValue = this.props.value;
        console.log('next dice value: ' + currValue);
        return (
            <Center>
                <img
                    alt="dice value"
                    src={this.state.image}
                    onClick={() => {
                        const next = this.props.roll(currValue);
                        this.handleClick(next);
                    }}
                />
            </Center>
        )
    }
}

Dice.propTypes = {
    value: PropTypes.number.isRequired,
    roll: PropTypes.func.isRequired
};

export default Dice;