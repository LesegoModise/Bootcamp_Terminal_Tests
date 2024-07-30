import assert from "assert";
import { totalPhoneBill } from "../totalPhoneBill.js";

describe('The totalPhoneBill function', function(){

    it('should calculate the total bill for the data provided - call, sms, call, sms, sms.', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));      
    });
    it('should calculate the total bill for the data provided - call, sms.', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));      
    });
    it('should calculate the total bill for the data provided - sms, sms.', function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));              
    });
});








