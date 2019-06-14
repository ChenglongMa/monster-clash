import React from "react";
import Center from 'react-center';
import PropTypes from "prop-types";
import v0 from '../images/dice/value/0.png';
import v1 from '../images/dice/value/1.png';
import v2 from '../images/dice/value/2.png';
import v3 from '../images/dice/value/3.png';
import v4 from '../images/dice/value/4.png';
import v5 from '../images/dice/value/5.png';

const values = [v0, v1, v2, v3, v4, v5];

const Dice = ({value, roll}) => {
    console.log('next dice value: ' + value);
    return (
        <Center>
            <img src={values[value - 1]} alt="dice value" onClick={() => roll()}/>
        </Center>
    )
};

Dice.propTypes = {
    value: PropTypes.number.isRequired,
    roll: PropTypes.func.isRequired
};

export default Dice;