const { expect } = require('expect');
const { getPokemonDetails, callback } = require('./pokemon');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const error = new Error('Não temos esse pokémon para você :(');
    const callback = (onError, onSuccess) => {
      expect(onError).toEqual(error);
      done();
    } 
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    const callback = (onError, onSuccess) => {
      expect(onSuccess).toBe(expectedString);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});