let base = document.getElementById("Lado1");
let altura = document.getElementById("Lado2");
let btnEnv = document.getElementById("enviar");

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("la superficie es ", base.value * altura.value);
  document.getElementById("resultado").innerHTML = base.value * altura.value;

  /*   console.log("el tipo de base es ", typeof base);
  Number(base);
  console.log("se convierte base.value");
  console.log("el tipo de base es ", typeof base.value);
  console.log("Number(base.value)" Number(base.value);
  console.log("base value " + base.value); */
  //}
  let base2 = Number(document.getElementById("Lado1").value);
  console.log("base2 es ", typeof base2);
});
