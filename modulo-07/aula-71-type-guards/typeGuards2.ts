export {};

// Exemplo 01:
interface Humano {
  falar(): void;
}

interface Animal {
  voz(): void;
}

const dizerAlgo = (som: Humano | Animal) => {
  if ("falar" in som) {
    return som.falar();
  }

  return som.voz();
};

const humano: Humano = {
  falar: function (): void {
    console.log("Olá");
  },
};

const cachorro: Animal = {
  voz: function (): void {
    console.log("Au au!");
  },
};

dizerAlgo(humano);
dizerAlgo(cachorro);
