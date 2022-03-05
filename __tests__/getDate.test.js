import getDate from '../src/assets/scripts/getDate';

const testGetDate = (number = 0) => {
  const today = new Date();
  const nextDay = new Date(today);
  const date = nextDay.setDate(nextDay.getDate() + number);
  const newDate = new Date(date);
  return newDate.toLocaleDateString('RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
}

test('Check date and 0 days', () => {
  const expected = testGetDate(0);
  const actual = getDate(-1);
  expect(expected).toEqual(actual);
});

test('Check date and 0.75 days', () => {
  const expected = testGetDate(Math.floor(0.75));
  const actual = getDate(0.75);
  expect(expected).toEqual(actual);
});


test('Check date and 2 days', () => {
  const expected = testGetDate(2);
  const actual = getDate(2);
  expect(expected).toEqual(actual);
});

test('Check date and 2 days string number', () => {
  const expected = testGetDate(2);
  const actual = getDate('2');
  expect(expected).toEqual(actual);
});

test('Check date and string', () => {
  const expected = testGetDate();
  const actual = getDate('string');
  expect(expected).toEqual(actual);
});
