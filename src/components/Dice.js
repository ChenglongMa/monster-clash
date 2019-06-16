import React from "react";
import Center from 'react-center';
import v0 from '../images/dice/value/0.png';
import v1 from '../images/dice/value/1.png';
import v2 from '../images/dice/value/2.png';
import v3 from '../images/dice/value/3.png';
import v4 from '../images/dice/value/4.png';
import v5 from '../images/dice/value/5.png';
import "../css/Dice.css";

const values = [v0, v1, v2, v3, v4, v5];

class Dice extends React.Component {

    render() {
        const currValue = this.props.value;
        console.log('next dice value: ' + currValue);
        return (
            <Center>
                <img id="Dice"
                     title="Hold on until you got a lucky number!"
                     alt={"current dice value: " + currValue}
                     src={values[currValue - 1]}
                     onClick={() => {
                         this.props.roll(currValue);
                     }}
                />
            </Center>
        );
    }
}

export default Dice;