const sumAll = function( a, b ) {
  if ( typeof a !== 'number' || typeof b !== 'number' ) {
    return 'ERROR';
  } else if ( a < 0 || b < 0 ) {
    return 'ERROR';
  } else {
    let startRangeFromNumber = Math.min( a, b );
    let endRangeWithNumber = Math.max( a, b );
    let result = 0;

    for( let i = startRangeFromNumber; i <= endRangeWithNumber; i++ ) {
      result += i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
