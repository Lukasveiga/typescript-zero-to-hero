export {};

// Exemplo 01:
function exibirPrecoFinal(
  preco: number,
  desconto: number,
  formato: boolean
): number | string {
  const precoComDesconto = preco * (1 - desconto);
  return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;
console.log(descontoFinal);

// Exemplo 02:
type Humano = {
  nome: string;
  idade: number;
  idioma: string;
};

const humano = {
  idade: 26,
  idioma: "Português",
};

const humano_02 = humano as Humano;
try {
  console.log(humano_02.nome.toUpperCase()); // Dangerous !!
} catch (e) {
  console.log((e as Error).message);
}

// const humano_03: Humano = humano; --> Safety!!
