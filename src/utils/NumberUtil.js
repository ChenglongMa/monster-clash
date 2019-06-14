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