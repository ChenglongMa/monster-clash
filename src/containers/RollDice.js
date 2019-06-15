import {connect} from 'react-redux'
import {setValue} from "../actions/diceAction";
import Dice from "../components/Dice";
import {nextRandomValue} from "../utils/NumberUtil";

const mapStateToProps = state => ({
    value: state.nextDice
});

const mapDispatchToProps = dispatch => ({
    // TODO: bad practice
    roll: (prev) => {
        const next = nextRandomValue(prev);
        dispatch(setValue(next));
        return next;
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice)