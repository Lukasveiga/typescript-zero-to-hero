export {};

// Exemplo 01:
function somarNumeros(...numeros: number[]) {
  let total = 0;

  numeros.forEach((numero) => (total += numero));

  return total;
}

console.log(somarNumeros(10, 20));
console.log(somarNumeros(10, 20, 30, 40, 50));

// Exemplo 02:
function listarFrutas(frase: string, ...frutas: string[]) {
  return frase + " " + frutas.join(", ");
}

console.log(
  listarFrutas(
    "Lukas, você precisa ir na feira e comprar:",
    "Mamão",
    "Uva",
    "Banana"
  )
);

// Exemplo 03:
class Produtos {
  public exibirProdutos(...produtos: string[]): void {
    for (const produto of produtos) {
      console.log(produto);
    }
  }
}

const departamentoDeInformatica: Produtos = new Produtos();
console.log(
  "Todos os produtos do departamento de informática disponíveis no estoque...:"
);
departamentoDeInformatica.exibirProdutos(
  "Mouse",
  "Teclado",
  "Monitor",
  "Web Cam"
);
