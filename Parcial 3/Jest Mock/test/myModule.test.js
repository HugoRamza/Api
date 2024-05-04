const { noDeterministicFunction } = require('../src/myModule');

// Simulando todo el módulo
jest.mock('../src/myModule', () => ({
  noDeterministicFunction: jest.fn()
}));

describe('Prueba de función no determinista', () => {
  it('debe devolver cara cuando el simulacro esta configurado para devolver cara ', () => {
    noDeterministicFunction.mockReturnValue("heads");
    expect(noDeterministicFunction()).toBe("heads");
  });

  it('debe devolver cruz cuando el simulacro esta configurado para devolver cruz', () => {
    noDeterministicFunction.mockReturnValue("tails");
    expect(noDeterministicFunction()).toBe("tails");
  });
});
