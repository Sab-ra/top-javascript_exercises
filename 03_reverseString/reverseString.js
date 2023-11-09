const reverseString = function( originString ) {
  let reversedString = '';
  let originToArray = originString.split( '' );
  let reverseArray = originToArray.reverse();
  reversedString = reverseArray.toString().replace( /,/g, '' );

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
