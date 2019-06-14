export const DiceActions = {
    ROLLING: 'Rolling',
    SETTING: 'Setting'
};

export const rolling = () => ({
    type: DiceActions.ROLLING
});

export const setValue = nextValue => ({
    type: DiceActions.SETTING,
    nextValue
});