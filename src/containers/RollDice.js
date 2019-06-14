import {connect} from 'react-redux'
import {setValue} from "../actions/diceAction";
import Dice from "../components/Dice";

/**
 * Generate random value
 * NOTE: it's not pure function
 * @param max the max value to generate
 * @returns {number}
 */
const nextValue = (max = 6) => {
    return Math.floor(Math.random() * max) + 1;
};

const mapStateToProps = state => ({
    value: state.nextDice
});

const mapDispatchToProps = dispatch => ({
    roll: () => dispatch(setValue(nextValue()))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice)