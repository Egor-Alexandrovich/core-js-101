/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result = '';
  if (num % 3 === 0) {
    result = 'Fizz';
  }
  if (num % 5 === 0) {
    result += 'Buzz';
    result.trim();
  }
  if (result === '') {
    result = num;
  }
  return result;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  const count = 1;
  const result = 1;
  function fact(count1, result1) {
    if (count1 <= n) {
      const b = count1 * result1;
      const c = count1 + 1;
      return fact(c, b);
    }
    return result1;
  }
  const t = fact(count, result);
  return t;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  if (n1 >= n2) {
    return n1;
  }
  return n1 + getSumBetweenNumbers(n1 + 1, n2);
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if ((a + b > c) && (b + c > a) && (a + c > b)) {
    return true;
  }
  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(/* rect1, rect2 */) {
  // const a = {
  //   x: rect1.left,
  //   y: rect1.top,
  //   x1: rect1.width + rect1.left,
  //   y1: rect1.height + rect1.top,
  // };
  // const b = {
  //   x: rect2.left,
  //   y: rect2.top,
  //   x1: rect2.width + rect1.left,
  //   y1: rect2.height + rect1.top,
  // };
  // return ((a.y < b.y1 || a.y1 > b.y) && (a.x1 > b.x || a.x < b.x1));
  // return (
  //   (
  //     (
  //       (a.x > b.x && a.x < b.x1) || (a.x1 > b.x && a.x1 < b.x1)
  //     ) && (
  //       (a.y > b.y && a.y < b.y1) || (a.y1 > b.y && a.y1 < b.y1)
  //     )
  //   ) || (
  //     (
  //       (b.x > a.x && b.x < a.x1) || (b.x1 > a.x && b.x1 < a.x1)
  //     ) && (
  //       (b.y > a.y && b.y < a.y1) || (b.y1 > a.y && b.y1 < a.y1)
  //     )
  //   )
  // ) || (
  //   (
  //     (
  //       (a.x > b.x && a.x < b.x1) || (a.x1 > b.x && a.x1 < b.x1)
  //     ) && (
  //       (b.y > a.y && b.y < a.y1) || (b.y1 > a.y && b.y1 < a.y1)
  //     )
  //   ) || (
  //     (
  //       (b.x > a.x && b.x < a.x1) || (b.x1 > a.x && b.x1 < a.x1)
  //     ) && (
  //       (a.y > b.y && a.y < b.y1) || (a.y1 > b.y && a.y1 < b.y1)
  //     )
  //   )
  // );
  throw new Error('Not implemented');
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const xa = circle.center.x - point.x;
  const yb = circle.center.y - point.y;
  if (xa ** 2 + yb ** 2 < circle.radius ** 2) { return true; }
  return false;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  let stroke = str;
  if (stroke === '') {
    return null;
  }
  const firstLater = stroke[0];
  if (firstLater === ' ') {
    stroke = stroke.replace(firstLater, '');
  } else {
    stroke = stroke.replace(firstLater, '');
    if (stroke.includes(firstLater)) {
      let k;
      while (k !== -1) {
        k = stroke.indexOf(firstLater);
        if (k !== -1) {
          stroke = stroke.replace(firstLater, '');
        }
      }
      return findFirstSingleChar(stroke);
    }
    return firstLater;
  }
  return findFirstSingleChar(stroke);
}
/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let str = '';
  if (isStartIncluded) {
    str += '[';
  } else { str += '('; }
  if (a < b) {
    str += `${a}, ${b}`;
  } else {
    str += `${b}, ${a}`;
  }
  if (isEndIncluded) {
    str += ']';
  } else { str += ')'; }
  return str;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split(' ').map((elem) => elem.split('').reverse().join('')).reverse().join(' ');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const str = String(num);
  const result = str.split('').reverse().join('');
  return parseInt(result, 10);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const strCode = String(ccn);
  let sum = 0;
  for (let i = 0; i < strCode.length; i += 1) {
    let CreditCardNumber = parseInt(strCode[i], 10);
    if ((strCode.length - i) % 2 === 0) {
      CreditCardNumber *= 2;
      if (CreditCardNumber > 9) {
        CreditCardNumber -= 9;
      }
    }
    sum += CreditCardNumber;
  }
  return sum % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let n = num;
  if (n / 10 >= 1) {
    n = String(n).split('').reduce((sum, current) => parseInt(sum, 10) + parseInt(current, 10), 0);
    return getDigitalRoot(n);
  }
  return n;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];
  const inputStack = str.split('');
  const bracketsStack = [];
  function topStack(stack) {
    return stack[stack.length - 1];
  }
  function checkOpen(arrayConfig, str1) {
    let a;
    for (let i = 0; i <= arrayConfig.length - 1; i += 1) {
      if (arrayConfig[i][0] === str1) {
        a = true;
        break;
      } else { a = false; }
    }
    return a;
  }
  function checkClose(arrayConfig, str2) {
    let a;
    for (let i = 0; i <= arrayConfig.length - 1; i += 1) {
      if (arrayConfig[i][0] === str2) {
        // eslint-disable-next-line prefer-destructuring
        a = arrayConfig[i][1];
        break;
      } else { a = false; }
    }
    return a;
  }
  function checkDouble(arrayConfig, str2) {
    let a;
    for (let i = 0; i <= arrayConfig.length - 1; i += 1) {
      if (arrayConfig[i][0] === str2 && arrayConfig[i][1] === str2) {
        a = true;
        break;
      } else { a = false; }
    }
    return a;
  }
  while (inputStack.length > 0) {
    if (checkDouble(bracketsConfig, topStack(inputStack))) {
      if (bracketsStack.length > 0) {
        if (bracketsStack.some((brackets) => brackets === topStack(inputStack))) {
          if (topStack(inputStack) === topStack(bracketsStack)) {
            inputStack.pop();
            bracketsStack.pop();
          } else {
            return false;
          }
        } else {
          bracketsStack.push(inputStack.pop());
        }
      } else {
        bracketsStack.push(inputStack.pop());
      }
    } else if (checkOpen(bracketsConfig, (topStack(inputStack)))) {
      if (bracketsStack.length > 0) {
        if (checkClose(bracketsConfig, topStack(inputStack)) === topStack(bracketsStack)) {
          inputStack.pop();
          bracketsStack.pop();
        } else {
          return false;
        }
      } else { return false; }
    } else {
      bracketsStack.push(inputStack.pop());
    }
  }
  if (inputStack.length === 0 && bracketsStack.length === 0) {
    return true;
  }
  return false;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const outputArr = [];
  let numer = num;
  if (numer < n - 1) { outputArr.push(numer); }
  while (numer > n - 1) {
    outputArr.push(numer % n);
    numer = Math.floor(numer / n);
    if (numer <= n - 1) { outputArr.push(numer); }
  }
  outputArr.reverse();
  return outputArr.join('');
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(/* pathes */) {
  throw new Error('Not implemented');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(/* m1, m2 */) {
  throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(/* position */) {
  throw new Error('Not implemented');
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
