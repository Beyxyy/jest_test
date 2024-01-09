const app = require('../app.js');

describe("basic Test", ()=>{  
    it('should be false', ()=>{
        expect(app.has_to_return_false()).toBeFalsy();
    })
    it('should be a true', ()=>{
        expect(app.has_to_return_true()).toBeTruthy();
    })
        
        
        // expect(app.to_be_tested_2()).toEqual('salut beau gosse');
})