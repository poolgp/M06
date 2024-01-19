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

document.getElementById('idForm').addEventListener('submit', function startGame(event) {
  event.preventDefault();
  let userName = document.getElementById('inputNameUser').value;

  if (userName.trim() === '') {
    alert('Si us plau, introdueix un nom');
    return;
  } else {
    document.cookie = `userName=${userName}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    // localStorage.setItem('userName', userName);

    let nameElement = document.getElementById('name');
    nameElement.textContent = userName;
  }
  ocultar();
  mostrarAbc();
  const palabraSeleccionada = mostrarPalabra();
  comprovarLLetra(palabraSeleccionada);
});

function ocultar() {
  document.getElementById('idForm').style.display = 'none';

  document.getElementById('P1').style.display = 'none';
  document.getElementById('P2').style.display = 'none';
  document.getElementById('P3').style.display = 'none';
  document.getElementById('P4').style.display = 'none';
  document.getElementById('P5').style.display = 'none';
  document.getElementById('P6').style.display = 'none';
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
    aElement.id = 'caracter-${caracter}';
    aElement.textContent = caracter;

    aElement.addEventListener('click', function () {
      comprovarLLetra(caracter, palabraSeleccionada);
    });

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

function mostrarPalabra() {
  const palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];

  let temaElement = document.getElementById('tema');
  temaElement.textContent = palabraSeleccionada.tematica;

  const palabraDiv = document.getElementById('palabra');
  palabraDiv.innerHTML = '';

  for (let i = 0; i < palabraSeleccionada.nombre.length; i++) {
    palabraDiv.innerHTML += '_ ';
  }

  return palabraSeleccionada;
}

function comprovarLLetra(lletraClic, palabraSeleccionada) {
  console.log('Lletra clicada: ${lletraClic}');

  const palabraDiv = document.getElementById('palabra');
  const palabraCompleta = palabraSeleccionada.nombre;

  let palabraActualizada = '';
  let letraEncontrada = false;

  for (let i = 0; i < palabraCompleta.length; i++) {
    if (palabraCompleta[i] === lletraClic) {
      palabraActualizada += lletraClic + ' ';
      letraEncontrada = true;
    }else{
      palabraActualizada += '_ ';
    }
  }

  palabraDiv.textContent = palabraActualizada.trim();

  if (!letraEncontrada) {
    document.getElementById(`caracter-${lletraClic}`).removeEventListener('click', null);
    document.getElementById(`caracter-${lletraClic}`).style.pointerEvents = 'none';
    document.getElementById(`caracter-${lletraClic}`).style.cursor = 'default';
  }
}

/*
function comprovarLletra();

function pipntarLLetra();

function Fin del Joc();

*/

// function finJoc() {
//   //mostrar info de la paraula
//   //mostrar boto tornar a jugar
//   //mostrar boton sortir (borra el cache i/o recarega la pagina)
// }

// Actualizar el contador de errores
// let numeroPreguntaActual = indice + 1;
// let totalPreguntas = preguntas.length;
// document.getElementById("questionCounter").textContent = `${numeroPreguntaActual}/${totalPreguntas}`;


//contador (opcional)



// function bloquejarLletra(){
//     document.getElementById(lletraCurrent);

//     /*
//       pointer-events: none;
//     cursor: default;
//     */

// }



// lletraCurrent = "e";

// fail = true;
// error=0;
// correcte=0;

// arrayParaulaCurrent=["a","v","i","o"];



// function comprova(lletraClic){

//     alert(lletraClic);
//     for (let index = 0; index < arrayParaulaCurrent.length; index++) {
//         const element = arrayParaulaCurrent[index];

//         if (element == lletraCurrent) {
//             fail=false;
//             //pintar verd
//             //background-color: green;
//             //pintar la mascara
//             correcte++;
//             if(arrayParaulaCurrent.length = correcte){
//                 findeljoc("win");
//             }
//         }

//         bloquejarLletra();
//     }

//     if(fail){
//         error++;
//         //pintar vermell
//         //background-color: red;
//         //mostrar imatge error (penjat.jpg)
//         if(error>=6){
//             findeljoc("lose");
//         }
//     }
// }


/*
let lletraCurrent; // Define la letra actual
let arrayParaulaCurrent; // Define el array con las letras de la palabra actual

function comprova(lletraClic) {
    let fail = true;

    for (let index = 0; index < arrayParaulaCurrent.length; index++) {
        const element = arrayParaulaCurrent[index];

        if (element === lletraClic) {
            fail = false;
            // La letra está en la palabra
            // Realiza las acciones necesarias, por ejemplo, pintar de verde
            // Actualiza la máscara y verifica si se ha completado la palabra
            pipntarLLetra(); // Función que pintará la letra en la máscara
            if (comprobarPalabraCompletada()) {
                finJoc("win");
            }
        }
    }

    if (fail) {
        // La letra no está en la palabra
        // Realiza las acciones necesarias, por ejemplo, pintar de rojo
        // Muestra la imagen de error y verifica si se ha alcanzado el límite de errores
        error++;
        // Pintar de rojo, mostrar imagen de error, etc.
        if (error >= 6) {
            finJoc("lose");
        }
    }

    // Bloquear la letra clicada
    bloquejarLletra(lletraClic);
}

function pipntarLLetra() {
    // Implementa la lógica para pintar la letra en la máscara
    // Por ejemplo, actualiza el contenido de la etiqueta con id "palabra"
}

function comprobarPalabraCompletada() {
    // Implementa la lógica para verificar si la palabra se ha completado
    // Puedes comparar la máscara con la palabra completa
    return palabraCompleta === palabraActual; // Asegúrate de ajustar esto según tu implementación
}

function bloquejarLletra(lletraClic) {
    // Implementa la lógica para bloquear la letra clicada
    // Por ejemplo, desactiva el enlace con la letra correspondiente
    document.getElementById(`caracter-${lletraClic}`).style.pointerEvents = "none";
    document.getElementById(`caracter-${lletraClic}`).style.cursor = "default";
}

function finJoc(resultado) {
    // Implementa la lógica para el final del juego
    // Puedes mostrar información sobre la palabra, un botón para jugar de nuevo, etc.
    if (resultado === "win") {
        alert("Has ganado");
    } else {
        alert("Has perdido");
    }
}

*/