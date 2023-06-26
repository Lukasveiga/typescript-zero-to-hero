"use strict";
// Exemplo 01: Numeric Enums
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portuges"] = 0] = "Portuges";
    Idiomas[Idiomas["Ingles"] = 1] = "Ingles";
    Idiomas[Idiomas["Frances"] = 2] = "Frances";
    Idiomas[Idiomas["Alemao"] = 3] = "Alemao";
    Idiomas[Idiomas["Espanho"] = 4] = "Espanho";
})(Idiomas || (Idiomas = {}));
console.log(Idiomas);
