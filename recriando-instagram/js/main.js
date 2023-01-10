const labels = [...document.querySelectorAll("#input label span")];
const inputs = [...document.querySelectorAll("#input label input")];
const enterButton = document.querySelector(".botao-entrar");

function acionarSpan(e) {
  const elemento = e.target;
  const index = inputs.indexOf(elemento);
  labels[index].classList.add("span-active");
}
function tirarSpan(e) {
  const elemento = e.target;
  const index = inputs.indexOf(elemento);
  elemento.value ? false : labels[index].classList.remove("span-active");
}
function ativarButton(e) {
  enterButton.disabled =
    inputs[0].value.length > 6 && inputs[1].value.length > 6 ? false : true;
}

inputs.forEach((input) => {
  input.addEventListener("focusin", acionarSpan);
  input.addEventListener("focusout", tirarSpan);
  input.addEventListener("keyup", ativarButton);
});
const buttonShowPassword = document.querySelector(".show-password");
const inputPassword = document.querySelector("#input-senha");

function showPassword(e) {
  const typeInputPassword = inputPassword.type;
  inputPassword.type = typeInputPassword === "password" ? "text" : "password";
  buttonShowPassword.innerText =
    typeInputPassword === "password" ? "Ocultar" : "Mostrar";
}

buttonShowPassword.addEventListener("click", showPassword);
