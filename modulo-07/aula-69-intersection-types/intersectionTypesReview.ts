export {};

interface Audio {
  format: "mp3" | "ogg" | "wav";
  durationInSeconds: number;
}

interface Imagem {
  resolucao: number;
  cores: string[];
  frequencia: number;
}

type Video = Audio & Imagem;

const video01: Video = {
  format: "mp3",
  durationInSeconds: 180,
  resolucao: 1080,
  cores: ["R", "G", "B"],
  frequencia: 144,
};

console.log(video01);
