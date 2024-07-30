import assert from "assert";
import { transportFee } from "../transportFee.js";

describe('The transportFee function', function(){

    it('should return R20 if you are working morning shift.', function(){
        assert.equal(transportFee('morning'), 'R20');        
    });
    it('should return R10 if you are working night shift.', function(){
        assert.equal(transportFee('afternoon'), 'R10');        
    });
    it('If you work nightshift, you pay nothing.', function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');               
    });
});







