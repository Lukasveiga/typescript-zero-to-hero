// Exemplo 01: Tipo Unknown
let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = "Oi";

console.log(valorVariavel);

// Exemplo 02: Erro ao tentar atribuir um valor do tipo Unknown a outros tipos
let valor: unknown;

/* let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor; */

// Exemplo 03: Unknown vs any
let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown = 5.22;

//console.log(algumaCoisaAny.toFixed(2));  -> apresenta erro em runtime se não for verificado;
if (typeof algumaCoisaUnknown === "number") {
  console.log(algumaCoisaUnknown.toFixed(2)); // --> já o unknown apresenta erro em tempo de compilação;
}
