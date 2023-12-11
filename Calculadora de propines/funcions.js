function calcula() {
  let formulari = document.getElementById("idForm");
  let NumComensals = formulari.inputComensals.value;
  let TotalDiners = parseFloat(formulari.inputTotalDiners.value);
  let Opinio = formulari.selectOpinio.value;
  const minPropina  = 0.5;

  if (NumComensals == " " || NumComensals < 1 || isNaN(NumComensals)) {
    NumComensals = 1;
  }

  if (isNaN(TotalDiners) || TotalDiners < 0.01) {
    alert("Introdueix un import valit: mínim 0.01€");
    return;
  }

  if (Opinio === "escull") {
    alert("Opina sobre el servei: ");
    return;
  }

  var percentatge = 0;
  switch (Opinio) {
    case "genial":
      percentatge = 0.1;
      break;
    case "acceptable":
      percentatge = 0.05;
      break;
    case "horrible":
      percentatge = 0;
      break;
  }

  let propinaTotal = TotalDiners * percentatge;
  let propinaPersona = propinaTotal / NumComensals;

  if (propinaPersona < 0.5) {
    alert("La propina es menor a 0.5")
    propinaPersona = 0.5;
  }

  let resultadoElement = document.getElementById("resultadoPropina");
  resultadoElement.textContent = "Propina total: " + propinaTotal.toFixed(2) + "€ | Propina por persona: " + propinaPersona.toFixed(2) + "€";

  formulario.reset();
}
