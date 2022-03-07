/*How reduce() works without an initial value*/

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);

console.log(".....");

/*How reduce() works with an initial value*/

const ret=[1,2,3,4].reduce( (previousValue, currentValue, currentIndex, array) => {
    const ret =previousValue + currentValue;
    console.log(`previous: ${previousValue}, current: ${currentValue}, index: ${currentIndex}, returns: ${ret}, array ${array}`);
    return ret;
}, 10 );

