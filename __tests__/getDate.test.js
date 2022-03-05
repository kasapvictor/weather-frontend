import getDate from '../src/assets/scripts/getDate';

test('Check date and 0 days', () => {
  const today = new Date();
  const nextDay = new Date(today);
  const date = nextDay.setDate(nextDay.getDate() + 0);
  const newDate = new Date(date);
  const expected = newDate.toLocaleDateString('RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
  
  const actual = getDate(-1);
  expect(expected).toEqual(actual);
});

test('Check date and 0.75 days', () => {
  const today = new Date();
  const nextDay = new Date(today);
  const date = nextDay.setDate(nextDay.getDate() + Math.floor(0.75));
  const newDate = new Date(date);
  const expected = newDate.toLocaleDateString('RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
  
  const actual = getDate(0.75);
  expect(expected).toEqual(actual);
});


test('Check date and 2 days', () => {
  const today = new Date();
  const nextDay = new Date(today);
  const date = nextDay.setDate(nextDay.getDate() + 2); // 1645974081243
  const newDate = new Date(date);
  const expected = newDate.toLocaleDateString('RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
  const actual = getDate(2);
  expect(expected).toEqual(actual);
});

test('Check date and 2 days string', () => {
  const today = new Date();
  const nextDay = new Date(today);
  const date = nextDay.setDate(nextDay.getDate() + 2); // 1645974081243
  const newDate = new Date(date);
  const expected = newDate.toLocaleDateString('RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
  const actual = getDate('2');
  expect(expected).toEqual(actual);
});

test('Check date and string', () => {
  const today = new Date();
  const nextDay = new Date(today);
  const date = nextDay.setDate(nextDay.getDate()); // 1645974081243
  const newDate = new Date(date);
  const expected = newDate.toLocaleDateString('RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

  const actual = getDate('string');
  expect(expected).toEqual(actual);
});
