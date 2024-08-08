const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

const formSent = () => {
  var name = document.querySelector("#name-input").value;
  var mail = document.querySelector("#email-input").value;
  var tel = document.querySelector("#phone-input").value;
  var text = document.querySelector("#textarea-input").value;

  Swal.fire({
    icon: "info",
    title: "Resultado do formulário",
    html: `Nome: ${name} <br /> Email: ${mail} <br /> Telefone: ${tel} <br /> Mensagem: ${text}`,
  });
};
