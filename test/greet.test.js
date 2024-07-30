import assert from "assert";
import { greet } from "../greet.js";


describe('The greet function', function () {

    it('should greet Bob correctly', function () {
        assert.equal(greet('Bob'), 'Hello, Bob');
    });
    it('should greet Sam correctly', function () {
        assert.equal(greet('Sam'), 'Hello, Sam');
    });
});
