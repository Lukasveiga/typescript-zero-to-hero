// => Variáveis [Type Annotation]
let nome: string = "Lukas";
console.log(nome);

// => Arrays [Type Annotation]
let animais: string[] = ["Macaco", "Gato", "Cachorro", "Girafa"];
console.log(animais);

// => Objects [Type Annotation]
let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = { nome: "Toyata Etios Hat XS", ano: 2015, preco: 45_000 };
console.log(carro);

// => Functions [Type Annotation]
function multiplicarNumeros(number1: number, number2: number) {
  return number1 * number2;
}

console.log(multiplicarNumeros(2, 5));
