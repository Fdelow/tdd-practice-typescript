export const unitConversion = (
  input: number,
  origin?: 'inch' | 'foot' | 'yard',
  target?: 'inch' | 'foot' | 'yard',
) => {
  if (input < 0) {
    throw new Error('negative number!');
  }

  if (input > 0 && (!!!origin || !!!target)) {
    throw new Error('no unit!');
  }

  if (origin === 'foot' && target === 'inch') {
    return input * 12;
  }
  if (origin === 'yard' && target === 'foot') {
    return input * 3;
  }
  if (origin === 'yard' && target === 'inch') {
    return input * 36;
  }
  if (origin === 'inch' && target === 'foot') {
    return input / 12;
  }
  if (origin === 'foot' && target === 'yard') {
    return input / 3;
  }
  if (origin === 'inch' && target === 'yard') {
    return input / 36;
  }
  return input;
};
