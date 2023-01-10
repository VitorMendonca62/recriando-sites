const inputSenha = document.getElementById("input-senha");
const inputEmail = document.getElementById("input-email");
const error = document.querySelector(".error");
const form = document.querySelector("form");

const regexEmail = /([^a-z0-9\.\-\@])/g;
const regexTelefone = /([0-9])/g;
const regexDominio = /([^a-z0-9\.])/g;

const user = {
  email: "vitor123@gmail.com",
  user: "vitor123",
  tel: "5581940028922",
  senha: "123@abc",
};

const errouInfos = (msg, elementos) => {
  elementos.forEach((elemento) => {
    elemento.style.borderColor = "#f00";
    elemento.classList.add("input-animation");
    error.innerText = msg;
    error.style.display = "block";
    setTimeout(() => {
      elemento.classList.remove("input-animation");
      elemento.style.borderColor = "rgb(182, 182, 182)";
      error.style.display = "none";
    }, 2000);
  });
};

function login(dados) {
  const passwordIsCorrect = dados.senha === user.senha;
  const loginIsCorrect = dados.email === user[dados.type];

  if (loginIsCorrect && passwordIsCorrect) {
    alert("login", user[dados.type]);
  } else {
    errouInfos("O usuário e/ou senha estão incorretas!", [
      inputEmail,
      inputSenha,
    ]);
  }
}

function validarInputs(e) {
  e.preventDefault();

  inputEmail.style.borderColor = "rgb(182, 182, 182)";
  inputSenha.style.borderColor = "rgb(182, 182, 182)";

  const email = inputEmail.value.toLowerCase();
  const senha = inputSenha.value;

  const emailSeparadoDoDominio = email.split("@");
  const arrayExecEmail = regexEmail.exec(email);
  const arrayExecDominioEmail = regexDominio.exec(emailSeparadoDoDominio[1]);
  const testRegexTelefone = regexTelefone.test(email);

  // NAO COLOCOU NADA
  if (!senha && !email) {
    errouInfos("Email e senha muito curta!", [inputEmail, inputSenha]);
    return "";
  }
  // LOGIN
  if (testRegexTelefone && email.length === 13) {
    return login({ email, senha, type: "tel" });
  }
  if (emailSeparadoDoDominio.length === 1) {
    return login({ email, senha, type: "user" });
  }

  //ERROS
  if (senha.length < 6) {
    return errouInfos("Senha muito curta", [inputSenha]);
  }
  if (!!arrayExecEmail || !!arrayExecDominioEmail) {
    return errouInfos("Não é permitido caracteres especiais no email", [
      inputEmail,
    ]);
  }
  if (emailSeparadoDoDominio.length > 2 || !!emailSeparadoDoDominio[1].value) {
    return errouInfos("Algo está errado.", [inputEmail]);
  }

  return login({ email, senha, type: "email" });
}

form.addEventListener("submit", validarInputs);
