import assert from "assert";
import { findItemsOver } from "../findItemsOver.js";

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

describe('The findItemsOver function', function(){

    it('should return products that have quantity higher than the threshold - 20.', function(){
        assert.deepEqual(results, findItemsOver(itemList, 20)); 
    });
});


console.log('findItemsOver passed!');


