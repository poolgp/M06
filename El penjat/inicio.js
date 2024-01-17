let palabras = [
  {
    nombre: "Espanya",
    imagen: "ruta/a/la/imagen1.jpg",
    descripcion: "Descripción palabra 1.",
    tematica: "Nom d'un país",
  },
  {
    nombre: "Franca",
    imagen: "ruta/a/la/imagen2.jpg",
    descripcion: "Descripción palabra 2.",
    tematica: "Nom d'un país",
  },
  {
    nombre: "Lleo",
    imagen: "ruta/a/la/imagen3.jpg",
    descripcion: "Descripción palabra 3.",
    tematica: "Animals del món",
  },
  {
    nombre: "Koala",
    imagen: "ruta/a/la/imagen4.jpg",
    descripcion: "Descripción palabra 4.",
    tematica: "Animals del món",
  },
  {
    nombre: "Cotxe",
    imagen: "ruta/a/la/imagen5.jpg",
    descripcion: "Descripción palabra 5.",
    tematica: "Vehicles de transport",
  },
  {
    nombre: "Avio",
    imagen: "ruta/a/la/imagen6.jpg",
    descripcion: "Descripción palabra 6.",
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
    let nameElement = document.getElementById('name');
    nameElement.textContent = userName;
  }
  ocultar();
  mostrarAbc();
  mostrarPalabra();
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
    aElement.id = 'caracter-${i}';
    aElement.textContent = caracter;

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
}


// Actualizar el contador de errores
// let numeroPreguntaActual = indice + 1;
// let totalPreguntas = preguntas.length;
// document.getElementById("questionCounter").textContent = `${numeroPreguntaActual}/${totalPreguntas}`;


//contador (opcional)


//const myArray = text.split(""); separar paraula en array


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
//         if(error>=9){
//             findeljoc("lose");
//         }
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     mostrarAlert();
// });