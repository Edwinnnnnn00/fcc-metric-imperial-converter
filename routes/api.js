'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
  .get(function (req, res) {
    const input = req.query.input.toLowerCase();
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);

    if (initNum == 'invalid number' && initUnit == 'invalid unit') {
      return res.send('invalid number and unit');
    } else if (initNum == 'invalid number') {
      return res.send('invalid number');
    } else if (initUnit == 'invalid unit') {
      return res.send('invalid unit');
    }

    const message = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    )

    res.send({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: message
    });
  });

};
