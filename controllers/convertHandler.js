function ConvertHandler() {
  this.getNum = function (input) {

    if (input.split('/').length > 2) {
      return 'invalid number';
    }

    const regex = /\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?/;
    const match = input.match(regex);

    if (!match) {
      return 1;
    } else {
      num = match[0];
    }

    if (num.includes('/')) {
      const [numerator, denominator] = num.split('/').map(Number);
      return numerator / denominator;
    } else {
      return Number(num);
    }

  };

  this.getUnit = function (input) {
    const validUnits = ["gal", "l", "lbs", "kg", "mi", "km"];
    const match = input.match(/[a-zA-Z]+/);
    let unit = '';

    if (!match) {
      return 'invalid unit';
    } else if (!validUnits.includes(match[0].toLowerCase())) {
      return 'invalid unit';
    } else {
      unit = match[0].toLowerCase();
    }
    
    if (unit == "l") {
      return "L";
    }

    return unit;
  };

  this.getReturnUnit = function (initUnit) {
    const dict = {
      gal: "L",
      L: "gal",
      lbs: "kg",
      kg: "lbs",
      mi: "km",
      km: "mi",
    };
    return dict[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const dict = {
      gal: "gallons",
      L: "liters",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometers",
    };
    return dict[unit];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = 0;

    if (initUnit === "gal") {
      result = initNum * galToL;
    } else if (initUnit === "L") {
      result = initNum / galToL;
    } else if (initUnit === "lbs") {
      result = initNum * lbsToKg;
    } else if (initUnit === "kg") {
      result = initNum / lbsToKg;
    } else if (initUnit === "mi") {
      result = initNum * miToKm;
    } else if (initUnit === "km") {
      result = initNum / miToKm;
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
