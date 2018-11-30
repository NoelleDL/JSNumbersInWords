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

  if (number > 20 && number < 100 && number % 10 != 0) {
    var units = number % 10;
    var tens = number - units;
    return numberToWords[tens] + '-' + numberToWords[units];
  }

  if (number > 100 && number % 100 != 0) {
    var units1 = number % 10;
    var tens1 = number - units1;
    return numberToWords[tens1] + ' and ' + numberToWords[units1];
  }
  return numberToWords[number];
}
