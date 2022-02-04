/* INSTRUCTIONS
find summary of all negative elements in the array
 */

function sumOfNegative(arr){
    let sum = 0;
    if (!arr.length) return 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum += arr[i];
        }
    }
    return sum;
}

module.exports = sumOfNegative;

const expect = require('chai').expect;


describe('SUM OF NEGATIVE', ()=> {
    it('should count sum of negative elements', function () {
        expect(sumOfNegative([-1, 9, -5, -7])).eq(-13);
    });

    it('return 0 if all elements are positive', function () {
        expect(sumOfNegative([1, 9, 5, 7])).eq(0);
    });

    it('if array is empty return 0', function () {
        expect(sumOfNegative([])).eq(0);
    });
})