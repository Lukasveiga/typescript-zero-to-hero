export {};

// Exemplo 01: Get
class Quadrado {
  private _altura: number;
  private _largura: number;

  constructor(altura: number, largura: number) {
    this._altura = altura;
    this._largura = largura;
  }

  calcularArea(): number {
    return this._altura * this._largura;
  }

  get altura(): number {
    return this._altura;
  }

  get largura(): number {
    return this._largura;
  }

  set altura(altura: number) {
    this._altura = altura;
  }

  set largura(largura: number) {
    this._largura = largura;
  }
}

const quadrado = new Quadrado(10, 10);
console.log(quadrado.altura);
console.log(quadrado.largura);
console.log(quadrado.calcularArea());

quadrado.altura = 5;
quadrado.largura = 5;
console.log(quadrado.altura);
console.log(quadrado.largura);
console.log(quadrado.calcularArea());
