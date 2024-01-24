let palabras = [
  {
    nombre: "ESPANYA",
    imagen: "./img/SagradaFamilia.jpg",
    descripcion: "Espanya, situada a la península ibèrica del sud-oest d'Europa, és un país divers i ric en història i cultura. Les seves encisadores ciutats, platges banyades pel sol i paisatges pintorescs de muntanya atreuen visitants de tot el món. Amb una barreja de tradició i modernitat, Espanya és coneguda per la seva arquitectura impressionant, la seva cuina deliciosa, la seva vibrante vida nocturna i els festivals colorits. Des dels majestuosos palauets fins a les bullicioses places, Espanya ofereix una experiència única que fusiona la passió i l'alegria en un entorn fascinant.",
    tematica: "Nom d'un país",
  },
  {
    nombre: "FRANCA",
    imagen: "./img/TorreEiffel.jpg",
    descripcion: "França, al cor d'Europa occidental, és coneguda per la seva rica història, el seu art excepcional, la seva exquisida gastronomia i la seva diversitat geogràfica. Des dels encisadors paisatges de la Provença fins a la majestuositat dels Alps, França ofereix una barreja única de tradició i modernitat. Les seves ciutats, com París amb la Torre Eiffel, reflecteixen l'elegància i la sofisticació, mentre que els seus poblets pintorescos i el seu patrimoni cultural contribueixen al seu atractiu atemporal. Amb una influència duradora en la moda, la literatura i la filosofia, França continua sent un destí culturalment ric i captivador.",
    tematica: "Nom d'un país",
  },
  {
    nombre: "LLEO",
    imagen: "./img/Leon.jpg",
    descripcion: "El lleó és un majestuós felí que es distingeix per la seva melena en el cas dels mascles. Conegut com el 'rei de la selva', habita principalment a l'Àfrica subsahariana i en algunes àrees d'Àsia. Els lleons són animals socials que viuen en grups anomenats manades, liderades per un mascle dominant. La seva imponent presència i el seu distintiu rugit han contribuït al seu estatus com a símbol de força i noblesa en diverses cultures i mitologies.",
    tematica: "Animals del món",
  },
  {
    nombre: "KOALA",
    imagen: "./img/koala.jpg",
    descripcion: "El koala és un adorabl marsupial originari d'Austràlia, conegut pel seu pelatge suau i gris, grans orelles rodones i nasal prominente. La seva dieta consisteix principalment en fulles d'eucaliptus, i són animals arboris que passen la major part del seu temps descansant a les branques. Tot i que la seva aparença tendra i el seu comportament tranquil els fan estimats, els koales s'enfronten a amenaces en termes de conservació a causa de la pèrdua d'hàbitat i altres reptes ambientals.",
    tematica: "Animals del món",
  },
  {
    nombre: "COTXE",
    imagen: "./img/coche.jpg",
    descripcion: "El cotxe, o automòbil, és un mitjà de transport personal amplament utilitzat. Disposa de rodes i motor, oferint una manera còmoda i eficient de desplaçar-se. Els cotxes varien en mida i disseny, des de vehicles compactes fins a SUVs o cotxes esportius. Són una peça clau de la vida quotidiana, proporcionant mobilitat i comoditat a les persones en les seves rutines diàries.",
    tematica: "Vehicles de transport",
  },
  {
    nombre: "AVIO",
    imagen: "./img/avion.jpg",
    descripcion: "L'avió és una aeronau impulsada per motors que es desplaça a través de l'aire. Amb ales que proporcionen sustentació i motors per a la propulsió, els avions són utilitzats per al transport de passatgers, càrrega o per finalitats militars. Aquest mitjà de transport ha revolucionat les comunicacions a escala global, permetent viatges ràpids i eficients entre diferents regions del món.",
    tematica: "Vehicles de transport",
  }
];

const maxErrores = 6;
let userName;
let palabraSeleccionada;
let lletresUtilitzades = [];
let errores = 0;

document.addEventListener('submit', function startGame(event) {
  event.preventDefault();

  validarNombre();
  inicialitzarJoc();
  mostrarPalabra();
  ocultar();
  mostrarAbc();
})

function validarNombre() {
  userName = document.getElementById('inputNameUser').value;

  if (userName.trim() === '') {
    alert('Si us plau, introdueix un nom.');
    return startGame();
  } else {
    localStorage.setItem('usuario', userName);
    mostrarNombre();
  }
}

function mostrarNombre() {
  let nameElement = document.getElementById('name');
  nameElement.textContent = userName;
}

function mostrarPalabra() {
  palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
  const arrayPalabra = palabraSeleccionada.nombre.split('');

  let palabraDiv = document.getElementById('palabra');
  palabraDiv.innerHTML = '';

  for (let i = 0; i < arrayPalabra.length; i++) {
    palabraDiv.innerHTML += '_';
  }

  let temaDiv = document.getElementById('tema');
  temaDiv.textContent = palabraSeleccionada.tematica;
}

function ocultar() {
  document.getElementById('idForm').style.display = 'none';

  const elementosOcultar = document.getElementsByClassName('ocultar');
  for (let i = 0; i < elementosOcultar.length; i++) {
    elementosOcultar[i].style.display = 'none';
  }
}

function mostrarAbc() {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const caracteresSeparados = abc.split('');

  const container = document.getElementById('containerLletras');

  const abc1 = document.createElement('div');
  abc1.className = 'abc1';

  const abc2 = document.createElement('div');
  abc2.className = 'abc2';

  const abc3 = document.createElement('div');
  abc3.className = 'abc3';

  caracteresSeparados.forEach((caracter, i) => {
    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.id = `caracter-${caracter}`;
    aElement.textContent = caracter;

    aElement.addEventListener('click', comprobarLetra);

    if (i < 10) {
      abc1.appendChild(aElement);
    } else if (i < 19) {
      abc2.appendChild(aElement);
    } else {
      abc3.appendChild(aElement);
    }
  });

  container.appendChild(abc1);
  container.appendChild(abc2);
  container.appendChild(abc3);
}

function comprobarLetra(event) {
  const letra = event.target.textContent; // Obtener el contenido de la letra
  const letraElement = document.getElementById(`caracter-${letra}`);
  letraElement.removeEventListener('click', comprobarLetra);

  if (palabraSeleccionada.nombre.includes(letra)) {
    mostrarLetra(letra);
    letraElement.style.color = 'green';
  } else {
    letraElement.style.color = 'red';
    comprobarErrores();
    errores++;
  }
  desarEstataJoc();
}

function mostrarLetra(letra) {
  for (let i = 0; i < arrayPalabra.length; i++) {
    if (arrayPalabra[i] === letra) {
      palabraDiv.childNodes[i * 2].textContent = letra;
    }
  }

  if (palabraCompleta() || errores === maxErrores) {
    finJuego();
  }
}

function palabraCompleta() {
  const palabraDiv = document.getElementById('palabra');
  const letrasMostradas = palabraDiv.textContent.split(' ');

  for (let i = 0; i < letrasMostradas.length; i++) {
    if (letrasMostradas[i] === '_') {
      return false;
    }
  }

  return true;
}

function comprobarErrores() {
  if (errores === 1) {
    document.getElementById('P1').style.display = 'block';
  } else if (errores === 2) {
    document.getElementById('P1').style.display = 'block';
    document.getElementById('P2').style.display = 'block';
  } else if (errores === 3) {
    document.getElementById('P1').style.display = 'block';
    document.getElementById('P2').style.display = 'block';
    document.getElementById('P3').style.display = 'block';
  } else if (errores === 4) {
    document.getElementById('P1').style.display = 'block';
    document.getElementById('P2').style.display = 'block';
    document.getElementById('P3').style.display = 'block';
    document.getElementById('P4').style.display = 'block';
  } else if (errores === 5) {
    document.getElementById('P1').style.display = 'block';
    document.getElementById('P2').style.display = 'block';
    document.getElementById('P3').style.display = 'block';
    document.getElementById('P4').style.display = 'block';
    document.getElementById('P5').style.display = 'block';
  } else if (errores === 6) {
    document.getElementById('P1').style.display = 'block';
    document.getElementById('P2').style.display = 'block';
    document.getElementById('P3').style.display = 'block';
    document.getElementById('P4').style.display = 'block';
    document.getElementById('P5').style.display = 'block';
    document.getElementById('P6').style.display = 'block';
    document.getElementById('P3').style.display = 'block';
  }
}

function finJuego() {
  const imgFinal = document.querySelector('.imgFinal');
  const descripcionFinal = document.querySelector('.descripcionFinal');

  imgFinal.src = palabraSeleccionada.imagen;
  descripcionFinal.textContent = palabraSeleccionada.descripcion;

  const resultadoContainer = document.getElementById('resultadoContainer');
  resultadoContainer.style.display = 'block';

  const letrasContainer = document.getElementById('letrasContainer');
  letrasContainer.style.display = 'none';
}

function desarEstataJoc() {
  const estatJoc = {
    paraulaActual: palabraSeleccionada.nombre,
    lletresUtilitzades: lletresUtilitzades,
  };

  localStorage.setItem('estatJoc', JSON.stringify(estatJoc));
}

function inicialitzarJoc() {
  const estatDesat = localStorage.getItem('estatJoc');

  if (estatDesat) {
    const estatJocRecuperat = JSON.parse(estatDesat);

    palabraSeleccionada = buscarParaulaPerNom(estatJocRecuperat.paraulaActual);
    lletresUtilitzades = estatJocRecuperat.lletresUtilitzades;
    mostrarPalabra();
    mostrarLletresUtilitzades();
  } else {
    startGame();
  }
}
