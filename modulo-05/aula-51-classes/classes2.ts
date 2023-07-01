// Review
class Produto {
  private _id: number;
  private _nome: string;
  private _descricao: string;

  constructor(id: number, nome: string, descricao: string) {
    this._id = id;
    this._nome = nome;
    this._descricao = descricao;
  }

  resumoProduto() {
    return `Id: ${this._id}\nNome: ${this._nome}\nDescrição: ${this._descricao}`;
  }
}

const produto01 = new Produto(
  1,
  "Cadeira Escritório",
  "Cadeira Egonômica, apoios de braço e reclinável"
);
console.log(produto01.resumoProduto());

const produto02 = new Produto(
  2,
  "Monitor 21.5 LED",
  "Monitor LG LED 21.5, resolução 1080p Full HD (1920x1080)"
);

console.log(produto02.resumoProduto());
