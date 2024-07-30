import assert from "assert";
import { allFromTown } from "../countAllFromTown.js";

describe('The countAllFromTown function', function () {

    it('should return all the registration numbers in the string that is for that town.', function () {
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
    });
    it('should return all the registration numbers in the string that is for that town.', function () {
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ');
        assert.deepEqual(fromStellies, ['CJ 456']);
    });
    it('should return all the registration numbers in the string that is for that town.', function () {
        var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
        assert.deepEqual(fromKuilsriver, []);
    });
});




