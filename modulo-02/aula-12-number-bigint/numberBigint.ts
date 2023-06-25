// => Exemplo: number
let number: number = 23.1;
let number2: number = 0x78cf;
let number3: number = 0o577;
let number4: number = 0b110001;
console.log("Number - Ponto flutuante...:", number);
console.log("Number - Hexadecimal...:", number2);
console.log("Number - Ocatal...:", number3);
console.log("Number - Binário...:", number4);

// => Exemplo: bigint
let big1: bigint = 9007199254740991n;
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

console.log("Bigint...: ", big1);
console.log("Bigint - Binário...: ", big2);
console.log("Bigint - Hexadecimal...: ", big3);
console.log("Bigint - Octal...: ", big4);
