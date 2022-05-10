const searchEmployee = require('./bonus');

describe('search for and Employee function', () => {
  it('searchEmployee should exist', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('searchEmployee should be a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('should throw an error if no id is informed', () => {
    expect(() => searchEmployee()).toThrow(new Error('Todos os argumentos devem ser informados'));
  });
  it('should throw an error if no detail is informed', () => {
    const anyId = 'anyId';
    expect(() => searchEmployee(anyId)).toThrow(new Error('Todos os argumentos devem ser informados'));
  });
  it('should throw an error if id is not a string', () => {
    const invalidId = 12
    const anyDetail = {};
    expect(() => searchEmployee(invalidId, anyDetail)).toThrow(new Error('id deve ser do tipo string'));
  });
  it('should throw an error if detail is not a string', () => {
    const validId = '12';
    const invalidDetail = {};
    expect(() => searchEmployee(validId, invalidDetail)).toThrow(new Error('detail deve ser do tipo string'));
  });
  it('should throw an error if detail is not contained in data base', () => {
    const validId = '8679-6';
    const invalidDetail = 'invalidDetail';
    expect(() => searchEmployee(validId, invalidDetail)).toThrow(new Error('Informação indisponível'));
  });
  it('should throw an error if id is not contained in data base', () => {
    const validId = '9252-6';
    const validDetail = 'firstName';
    expect(() => searchEmployee(validId, validDetail)).toThrow(new Error('ID não identificado'));
  });
  it('should return the firstName of professional with passed id', () => {
    const validId = '8579-6';
    const validDetail = 'firstName';
    const expectedValue = 'Ana';
    expect(searchEmployee(validId, validDetail)).toBe(expectedValue);
  });
  it('should return the lastName of professional with passed id', () => {
    const validId = '8579-6';
    const validDetail = 'lastName';
    const expectedValue = 'Gates';
    expect(searchEmployee(validId, validDetail)).toBe(expectedValue);
  });
  it('should return the specialities of professional with passed id', () => {
    const validId = '8579-6';
    const validDetail = 'specialities';
    const expectedValue = ['UX', 'Design'];
    expect(searchEmployee(validId, validDetail)).toEqual(expectedValue);
  });
})