const app = require('../app.js');

describe("basic Test", ()=>{  
    it('should be true', ()=>{
        expect(app.to_be_tested()).toBeFalsy();
    })
    it('should be a string equal "salut beau gosse"', ()=>{
        expect(app.to_be_tested_2()).toEqual('salut beau gosse');
    })
        
        
        // expect(app.to_be_tested_2()).toEqual('salut beau gosse');
})