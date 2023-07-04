export {};

// Exemplo 01:
type Cidade = NomeCidade | CidadeCoordenadas;

type NomeCidade = "São Paulo" | "Rio de Janeiro" | "Belo Horizinte";

type CidadeCoordenadas = {
  x: number;
  y: number;
};

type Pessoa = {
  localNascimento: Cidade;
  residenciaAtual: Cidade;
};

const pessoa = {
  localNascimento: "São Paulo",
  residenciaAtual: { x: 10, y: 10 },
} satisfies Pessoa;

console.log(pessoa.localNascimento.toLowerCase());

// Exemplo 02:
type Connection = {};

declare function createConnection(
  host: string,
  port: string,
  reconnect: boolean,
  poolSize: number
): Connection;

type Configuration = {
  host: string;
  port: string | number;
  tryReconnect: boolean | (() => boolean);
  poolSize?: number;
};

const config = {
  host: "localhost",
  port: 3306,
  tryReconnect: () => true,
  poolSize: 10,
} satisfies Configuration;

/* function connect() {
  let { host, port, tryReconnect, poolSize } = config;

  if (typeof port === "number") port = `${port}`;
  if (typeof tryReconnect !== "boolean") tryReconnect = tryReconnect();
  if (!poolSize) poolSize = 10;

  createConnection(host, port, tryReconnect, poolSize);
} */
