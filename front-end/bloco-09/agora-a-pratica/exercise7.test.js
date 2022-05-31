const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase function should behave correctly', (done) => {
  uppercase('test', (string) => {
    try {
      expect(string).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  })
});