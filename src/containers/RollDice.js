import {connect} from 'react-redux'
import {setValue} from "../actions/diceAction";
import Dice from "../components/Dice";
import {nextRandomValue} from "../utils/NumberUtil";

const mapStateToProps = state => ({
    value: state.nextDice
});

const mapDispatchToProps = dispatch => ({
    roll: (prev) => dispatch(setValue(nextRandomValue(prev)))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice)