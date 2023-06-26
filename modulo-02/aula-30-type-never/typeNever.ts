// Exemplo 01: Never - Throw Exception
const error = (message: string): never => {
  throw new Error(message);
};

console.log(error("Erro de Mensagem - 01"));

// Exemplo 02: Never inferido automaticamente
const rejectMessage = () => {
  throw new Error("Erro de Mensagem - 02");
};

console.log(rejectMessage());

// Exemplo 03: 'Never' vs 'Void'
const algumaCoisaVoid: void = null;
// const algumaCoisaNever: never = null;
