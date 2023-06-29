export {};
// Exemplo 01:
function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
  console.log("Id Funcionário...: ", idPessoa, "Nome...: ", nome);

  if (email !== undefined) {
    console.log("Email...: ", email);
  }
}

informarDadosPessoa(1, "Lukas");
informarDadosPessoa(2, "Natalia", "natalia@email.com");

// Exemplo 02: ||
function mensagemLog(mensagem: string, usuarioId?: number) {
  const horaLog = new Date().toLocaleTimeString("pt-BR");

  console.log(horaLog, mensagem, usuarioId ?? "Usuário(a) não conectado(a)");
}

mensagemLog("Atualizar página");
mensagemLog("Usuário(a) logado(a) com sucesso", 15);

// Exemplo 03
type Pessoa = {
  idFuncionario: number;
  nome: string;
  idade?: number;
  email?: string;
};

let pessoa: Pessoa;

pessoa = {
  idFuncionario: 0,
  nome: "Lukas Veiga",
};

console.log(pessoa);
