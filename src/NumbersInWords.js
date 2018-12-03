function Converter(number) {
  var numberToWords = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred'
  };

  var units = number % 10;
  var tens = number - units;
  var hundreds = tens % 100;
  var unitHundreds = (number - hundreds - units) / 100;

  if (number > 20 && number < 100 && units != 0) {
    return numberToWords[tens] + '-' + numberToWords[units];
  }

  if (number > 100 && number < 120 && unitHundreds != 0) {
    return numberToWords[tens] + ' and ' + numberToWords[units];
  }

  if (number > 119 && units == 0 && hundreds == 0) {
    return numberToWords[unitHundreds] + ' hundred';
  }

  if (number > 120 && units == 0) {
    return numberToWords[unitHundreds] + ' hundred and ' + numberToWords[hundreds];
  }

  if (number > 120 && units != 0) {
    return numberToWords[unitHundreds] + ' hundred and ' + numberToWords[hundreds] + '-' + numberToWords[units];
  }




  return numberToWords[number];
}
