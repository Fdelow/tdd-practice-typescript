export const fizzBuzz = (input: number) => {
  const inputDigitArray = input.toString().split('');
  let fizzFlag = false;
  let buzzFlag = false;
  //   if (
  //     (input % 3 === 0 && input % 5 === 0) ||
  //     (inputDigitArray.indexOf('3') !== -1 &&
  //       inputDigitArray.indexOf('5') !== -1) ||
  //     (input % 3 === 0 && inputDigitArray.indexOf('5') !== -1) ||
  //     (input % 5 === 0 && inputDigitArray.indexOf('3') !== -1)
  //   ) {
  //     return 'FizzBuzz';
  //   }
  if (input % 3 === 0 || inputDigitArray.indexOf('3') !== -1) {
    fizzFlag = true;
  }
  if (input % 5 === 0 || inputDigitArray.indexOf('5') !== -1) {
    buzzFlag = true;
  }

  if (fizzFlag && buzzFlag) {
    return 'FizzBuzz';
  }

  if (fizzFlag && !buzzFlag) {
    return 'Fizz';
  }

  if (!fizzFlag && buzzFlag) {
    return 'Buzz';
  }

  return input;
};

export const fizzBuzzFilter = (max: number) => {
  let result: (number | 'FizzBuzz' | 'Fizz' | 'Buzz')[] = [];
  for (let i = 1; i < max + 1; i++) {
    result.push(fizzBuzz(i));
  }

  return result;
};
