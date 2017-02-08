// Convert the given number into a roman numeral.


function convertToRoman(num) {
  var roman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
    5000: 'V*',
    10000: 'X*',
    50000: 'L*',
    100000: 'C*',
    500000: 'D*',
    1000000: 'M*'
  };
  
  var numLength = 0;
  var numDiv = num;
  var converted = [];
  
  while(numDiv) {
	var digit = numDiv%10;
	var position = Math.pow(10, (numLength));
  numDiv = parseInt(numDiv/10);
  numLength++;
  if(digit==5) {
    converted[numLength-1] = roman[5 * position];
  } else if(digit == 4) {
    converted[numLength-1] = roman[1 * position] + roman[5*position];
  } else if(digit == 9) {
    converted[numLength-1] = roman[1 * position] + roman[10 * position];
  } else if (digit === 0) {
    converted[numLength-1] = '';
  } else if (digit < 4 && digit > 0) {
    converted[numLength-1] = '';
    while(digit) {
      converted[numLength-1] += roman[1 * position];
      digit--;
    }
  } else if (digit > 5 && digit < 10) {
    var newdigit = digit - 5;
    converted[numLength-1] = roman[5*position];
    while(newdigit ) {
      converted[numLength-1] += roman[1 * position];
      newdigit --;
    }
  }
}
  var strNum = '';
  for(var i = converted.length - 1; i>=0; i--) {
    strNum+=converted[i];
  }
  
  
  
 return strNum;
}

convertToRoman(36);
