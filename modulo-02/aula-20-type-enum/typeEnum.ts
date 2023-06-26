// Exemplo 01: Numeric Enums
enum Idiomas {
  Portugues,
  Ingles,
  Frances,
  Alemao,
  Espanho,
}

console.log(Idiomas["0"]);

// Exemplo 02: String Enums
enum DiaDaSemana {
  Segunda = "SEG",
  Terca = "TER",
  Quarta = "QUA",
  Quinta = "QUI",
  Sexta = "SEX",
  Sabado = "SAB",
  Domingo = "DOM",
}

console.log(DiaDaSemana.Terca);

// Exemplo 03: Usano const
const enum Comida {
  Hamburguer = "Hamburguer",
  Massa = "Massa",
  Pizza = "Pizza",
  Torta = "Torta",
  Churrasco = "Churrasco",
}

function comida(c: Comida) {
  return c + ": Comida apetitosa!";
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));

// Exemplo 05: Quando usar enum?
enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: "Parabéns! Tarefa concluída!",
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log("Enviar email: " + concluidaTarefa.descricao);
}
