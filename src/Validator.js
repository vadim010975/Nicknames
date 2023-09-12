class Validator {
  static validateUsername({ userName }) {
    return /^[^\d\W_-][\w_-]*[^\d\W_-]$/.test(userName) && !/\d{4,}/.test(userName);
  }
}

module.exports = {
  Validator,
};
