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

  //Verificando cpfs com todos os numeros iguais
  let valido = true;

  for (i in cpfsInvalidos) {
    if (cpfsInvalidos[i] === valor) {
      valido = false;
    }
  }

  //Verifica se é composto somente por numeros
  regex = /\d[0-9]{10,10}/;
  let result = valor.match(regex);
  let isNumbers = result != null ? true : false;

  if (valido && isNumbers) {
    //Separando os digitos
    let numeros = valor.substring(0, 9);
    let digitos = valor.substring(9);

    let pDigito = 0;
    let sDigito = 0;
    let cont = 0;
    //Validando primeiro digito
    for (let j = 10; j > 1; j--) {
      pDigito += parseInt(numeros[cont]) * j;
      cont++;
    }
    let digito = (pDigito * 10) % 11;
    let digito1 = new String(digito > 9 ? 0 : digito);

    //Validando segundo digito
    cont = 0;
    numeros = valor.substring(0, 10);
    for (let h = 11; h > 1; h--) {
      sDigito += parseInt(numeros[cont]) * h;
      cont++;
    }
    digito = (sDigito * 10) % 11;
    let digito2 = new String(digito > 9 ? 0 : digito);

    //Apos validar os digitos retorna a informação para a tela
    if (digito1 == digitos[0] && digito2 == digitos[1]) {
      document.getElementById("success").style.display = "block";
    } else {
      document.getElementById("error").style.display = "block";
    }
  } else {
    document.getElementById("error").style.display = "block";
  }
}
