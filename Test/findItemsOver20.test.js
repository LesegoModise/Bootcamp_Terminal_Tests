import assert from "assert";
import { findItemsOver20 } from "../findItemsOver20.js";

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

describe('The findItemsOver20 function', function(){
    it('should return products that have quantity higher than the threshold - 20.', function(){
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });
});

console.log('findItemsOver20 passed!')