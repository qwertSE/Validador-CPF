const cpfsInvalidos = [
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999",
  "00000000000",
];

function validacao(valor) {
  //Resetando a div de resultados
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  //Etapa de validações.
  let valido = true;
  for (i in cpfsInvalidos) {
    if (cpfsInvalidos[i] === valor) {
      valido = false;
    }
  }

  regex = /\d[0-9]{10,10}/;
  let result = valor.match(regex);
  let isNumbers = result != null ? true : false;

  if (valido && isNumbers) {
    document.getElementById("success").style.display = "block";
    console.log(`Valido? ${valido}`);
  } else {
    document.getElementById("error").style.display = "block";
    console.log(`Valido? ${valido}`);
  }
}
