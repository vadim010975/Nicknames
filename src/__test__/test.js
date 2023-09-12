const { Validator } = require('../Validator');

test.each(
  [
    [{ userName: 'Vadim_123sq' }, true],
    [{ userName: 'Vadim_1234sq' }, false],
    [{ userName: '1Vadim_123sq' }, false],
    [{ userName: '_Vadim_123sq' }, false],
    [{ userName: '-Vadim_123sq' }, false],
    [{ userName: 'Vadim_123sq1' }, false],
    [{ userName: 'Vadim_123sq_' }, false],
    [{ userName: 'Vadim_123sq-' }, false],
    [{ userName: '&Vadim_123sq' }, false],
    [{ userName: 'Vadim&_123sq' }, false],
    [{ userName: 'Vadim_123sq+' }, false],
  ],
)('test method Validator.validateUsername with %s', (user, expected) => {
  const result = Validator.validateUsername(user);
  expect(result).toBe(expected);
});
