const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require('./functions');

describe('sum function', () => {
  it('should return 9 if a = 4 and b = 5', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('should return 0 if a = 0 and b = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('should throw an error when an input is not a number', () => {
    expect(() => sum(4,'5')).toThrow();
  });
  it('should throw an error with the message "parameters must be numbers" when an input is not a number', () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  });
});

describe('myRemove function', () => {
  const testArray = [1, 2, 3, 4];
  it('should return an array without the item input if it is contained inside the input array', () => {
    expect(myRemove(testArray, 3)).toEqual([1, 2, 4]);
  });
  it('should not return the same array if the item input is contained inside the input array', () => {
    expect(myRemove(testArray, 3)).not.toEqual(testArray);
  });
  it('should return the same array if the item input is not contained inside the input array', () => {
    expect(myRemove(testArray, 5)).toEqual(testArray);
  });
});

describe('myFizzBuzz', () => {
  it('should return "fizzbuzz" if "num" is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  it('should return "fizz" if "num" is divisible only by 3', () => {
    expect(myFizzBuzz(6)).toBe("fizz");
  });
  it('should return "buzz" if "num" is divisible only by 5', () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });
  it('should return "num" if "num" is not divisible by 3 and 5', () => {
    const num = 11;
    expect(myFizzBuzz(num)).toBe(num);
  });
  it('should return false if "num" is not a number', () => {
    const notANumber = 'notANumber';
    expect(myFizzBuzz(notANumber)).toBeFalsy();
  });
});

describe('encode and decode function', () => {
  it('encode should be a function', () => {
    expect(typeof encode).toBe('function');
  });
  it('decode should be a function', () => {
    expect(typeof decode).toBe('function');
  });
  it('should return a encoded string "12345" when "aeiou" is provided', () => {
    expect(encode("aeiou")).toBe("12345");
  });
  it('should return a decoded string "aeiou" when "12345" is provided', () => {
    expect(decode("12345")).toBe("aeiou");
  });
  it('should encode only the vowels from the input string', () => {
    expect(encode("Teste1234")).toBe("T2st21234");
  });
  it('should decode only the numbers from the input string', () => {
    expect(decode("Teste1234")).toBe("Testeaeio");
  });
  it('should return a encoded string with the same size as the input string', () => {
    const string = 'teste';
    const encodedString = encode(string);
    expect(encodedString.length).toBe(string.length);
  });
  it('should return a decoded string with the same size as the input string', () => {
    const string = 't2st2';
    const decodedString = decode(string);
    expect(decodedString.length).toBe(string.length);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
