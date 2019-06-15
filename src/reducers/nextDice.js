import {DiceActions} from "../actions/diceAction";

const nextDice = (state = 5, action) => {
    switch (action.type) {
        // not used
        case DiceActions.ROLLING:
            return state;
        case DiceActions.SETTING:
            return action.nextValue;
        default:
            return state;
    }
};

export default nextDice;