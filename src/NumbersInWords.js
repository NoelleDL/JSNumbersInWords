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

  if (number > 20 && number < 100 && number % 10 != 0) {
    return numberToWords[tens] + '-' + numberToWords[units];
  }

  if (number > 100 && number < 120 && number % 100 != 0) {
    return numberToWords[tens] + ' and ' + numberToWords[units];
  }

  if (number > 119) {
    var unitHundreds = number % 100;
    var hundreds = number - unitHundreds;
    return numberToWords[hundreds] + ' and ' + numberToWords[unitHundreds];
  }
  return numberToWords[number];
}
