var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can multiply', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('can divide', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('can add', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can subtract', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can concatenate', function(){
    calculator.numberClick(5);
    calculator.numberClick(4321);
    assert.strictEqual(calculator.runningTotal, 54321);
  })

  it('can chain operations', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(25);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 10);
  })

  it('can clear running total', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(25);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 12);
  })

});
