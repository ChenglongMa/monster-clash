/**
 * Check if the specified value is between the specified range.
 * <br>
 * NB, the `from` and `to` are inclusive.
 *
 * @param value the value to be checked.
 * @param fromInclusive the left boundary value, inclusive.
 * @param toInclusive the right boundary value, inclusive.
 * @returns {boolean}
 */
export const between = (value: number, fromInclusive: number, toInclusive: number): boolean => {
    return value >= fromInclusive && value <= toInclusive;
};

/**
 * Generate random value different with the previous value
 * NOTE: it's not pure function
 * @param prevValue the previous value
 * @param max the max value to generate
 * @returns {number}
 * TODO: seek better solution for state update
 */
export const nextRandomValue = (prevValue: number, max = 6): number => {
    let next;
    do {
        next = Math.floor(Math.random() * max) + 1;
    } while (next === prevValue);
    return next;
};