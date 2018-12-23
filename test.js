const assert = require('assert')
const operations = require('./operations.js')
it('correctly calculates the sum of 1 and 3',()=>{
    assert.equal(operations.add(1,3), 4)
})
it('correctly calculates the sum fo -1 and -1', ()=>{
    assert.equal(operations.add(-1, -1), -2)
})
it('correctly calculates the difference of 33  and 3',()=>{
    assert.equal(operations.subtract(33,3),30)
})
it('correctly calculates the product of 12 and 12',()=>{
    assert.equal(operations.multiply(12,12),144)
})
it('correctly calculates the quotient of 10 and 2',()=>{
    assert.equal(operations.divide(10,2),5)
})
it('indicates failure when a string is used instead of number',()=>{
    assert.equal(operations.validateNumbers('sammy', 5), false)
})
it('indicates failure when two strings is used instead of numbers',()=>{
    assert.equal(operations.validateNumbers('sammy','sammy'),false)
})
it('indicates runs when to numbers are used',()=>{
    assert.equal(operations.validateNumbers(5,5),true)
})