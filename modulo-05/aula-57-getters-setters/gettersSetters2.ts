export {};

// Review:
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

  get id() {
    return this._id;
  }

  get nome() {
    return this._nome;
  }

  get descricao() {
    return this._descricao;
  }

  set id(id: number) {
    this._id = id;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }
}

const produto01 = new Produto(
  1,
  "Cadeira Escritório",
  "Cadeira Egonômica, apoios de braço e reclinável"
);
console.log(produto01.id, produto01.nome, produto01.descricao);
console.log(produto01.resumoProduto());

produto01.id = 2;
produto01.nome = "Cadeira Escritório Gamer";
produto01.descricao = "Cadeira Ergonômica, apoios de braço e reclinável";

console.log(produto01.resumoProduto());
