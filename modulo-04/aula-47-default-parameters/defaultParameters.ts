export {};

// Exemplo 01:
function descontoCompra(preco: number, desconto: number = 0.08) {
  return preco * (1 - desconto);
}

console.log(descontoCompra(100));
console.log(descontoCompra(100, 0.1));

// Exemplo 02:
function exibirMensagem(nome: string, saudar = "Fala pessoal!") {
  return saudar + " " + nome + "!";
}

console.log(exibirMensagem("TypeScript developers"));
console.log(exibirMensagem("Javeiro", "Salve meu camarada"));

// Exemplo 03:
function exibirNome(nome: string, sobrenome = "Veiga") {
  return nome + " " + sobrenome;
}

const resultado1 = exibirNome("Lukas");
console.log(resultado1);

const resultado2 = exibirNome("Lukas", undefined);
console.log(resultado2);

const resultado3 = exibirNome("Lukas", "Barbosa");
console.log(resultado3);
