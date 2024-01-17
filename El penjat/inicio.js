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

document.getElementById("idForm").addEventListener("submit", function startGame(event) {
  event.preventDefault();
  let userName = document.getElementById("inputNameUser").value;

  if (userName.trim() === '') {
    alert('Si us plau, introdueix un nom');
    return;
  } else {
    let nameElement = document.getElementById("name");
    nameElement.textContent = userName;

    ocultar();
    mostrarAbc();
  }
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
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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



// Nom d'un país

// Animals del món

// vihicles de transport


//crear matriu (1- nom pais, 2-animals, 3- vehicles)

// matriu amb les paraule (img, nom, descripcio, tematica(1,2,3))

// crear abecedari desde js ( createElement() )
// o array amb totes les lletres i estat (vermell o verd)

//contador (opcional)


//const myArray = text.split(""); separar paraula en array

// const matriuTema = [
//   [1, 'nomPais'],
//   [2, 'animals'],
//   [3, 'transport']
// ];

// // const matriuParaules = [
// //   [1, 'Espanya', 'Espanya és un país d'Europa amb moltes coses divertides per descobrir. La capital és Madrid. Parlen espanyol i mengen menjars deliciosos com la paella i els xurros. Hi ha festes famoses com la Tomatina. Pots veure llocs increïbles com la Sagrada Família a Barcelona i l'Alhambra a Granada. És un país ple de coses interessants!', '../img/espanya.jpg', 1],
// // ]

// let matriuParaules ={
//   idParaula: 1,
//   nomParaula:

// }

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