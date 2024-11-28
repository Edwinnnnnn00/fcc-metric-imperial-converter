const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {

  test("#1", function () {
    assert.equal(convertHandler.getNum("10L"), 10);
  });

  test("#2", function () {
    assert.equal(convertHandler.getNum("0.5L"), 0.5);
  });

  test("#3", function () {
    assert.equal(convertHandler.getNum("1/2L"), 0.5);
  });

  test("#4", function () {
    assert.equal(convertHandler.getNum("5.4/3L"), 1.8);
  });

  test("#5", function () {
    assert.equal(convertHandler.getNum("3/2/3L"), "invalid number");
  });

  test("#6", function () {
    assert.equal(convertHandler.getNum("kg"), 1);
  });

  test("#7", function () {
    assert.equal(convertHandler.getUnit("10L"), "L");
    assert.equal(convertHandler.getUnit("11.5gal"), "gal");
    assert.equal(convertHandler.getUnit("10km"), "km");
    assert.equal(convertHandler.getUnit("11.5mi"), "mi");
    assert.equal(convertHandler.getUnit("10lbs"), "lbs");
    assert.equal(convertHandler.getUnit("11.5kg"), "kg");
  });

  test("#8", function () {
    assert.equal(convertHandler.getUnit("10Lc"), "invalid unit");
  });

  test("#9", function () {
    assert.equal(convertHandler.getReturnUnit("L"), "gal");
    assert.equal(convertHandler.getReturnUnit("gal"), "L");
    assert.equal(convertHandler.getReturnUnit("km"), "mi");
    assert.equal(convertHandler.getReturnUnit("mi"), "km");
    assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
    assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
  });

  test("#10", function () {
  assert.equal(convertHandler.spellOutUnit('L'), 'liters');
  assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
  assert.equal(convertHandler.spellOutUnit('km'), "kilometers");
  assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
  assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
  assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
  });

  test("#11", function () {
    assert.equal(convertHandler.convert(1, "gal"), 3.78541);
  });

  test("#12", function () {
    assert.equal(convertHandler.convert(1, "L"), 0.26417);
  });

  test("#13", function () {
    assert.equal(convertHandler.convert(1, "mi"), 1.60934);
  });

  test("#14", function () {
    assert.equal(convertHandler.convert(1, "km"), 0.62137);
  });
  
  test("#15", function () {
    assert.equal(convertHandler.convert(1, "lbs"), 0.45359);
  });

  test("#16", function () {
    assert.equal(convertHandler.convert(1, "kg"), 2.20462);
  });

});
