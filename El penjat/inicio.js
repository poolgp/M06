// Nom d'un país

// Animals del món

// vihicles de transport


//crear matriu (1- nom pais, 2-animals, 3- vehicles)

// matriu amb les paraule (img, nom, descripcio, tematica(1,2,3))

// crear abecedari desde js ( createElement() ) 
// o array amb totes les lletres i estat (vermell o verd)

//contador (opcional)


//const myArray = text.split(""); separar paraula en array 

function bloquejarLletra(){
    document.getElementById(lletraCurrent);

    /*
      pointer-events: none;
    cursor: default;
    */

}



lletraCurrent = "e";

fail = true;
error=0;
correcte=0;

arrayParaulaCurrent=["a","v","i","o"];



function comprova(lletraClic){

    alert(lletraClic);
    for (let index = 0; index < arrayParaulaCurrent.length; index++) {
        const element = arrayParaulaCurrent[index];

        if (element == lletraCurrent) {
            fail=false;
            //pintar verd 
            //background-color: green;
            //pintar la mascara
            correcte++;
            if(arrayParaulaCurrent.length = correcte){
                findeljoc("win");
            }
        }

        bloquejarLletra();
    }

    if(fail){
        error++;
        //pintar vermell
        //background-color: red;
        //mostrar imatge error (penjat.jpg)
        if(error>=9){
            findeljoc("lose");
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    mostrarAlert();
});

function mostrarAlert() {



(async () => {
    const ipAPI = "//api.ipify.org?format=json";
    const response = await fetch(ipAPI);
    const data = await response.json();
    const inputValue = data.ip;
    const { value: userNAme } = await Swal.fire({
      title: "El teu nom d'usuari",
      input: "text",
    //   inputLabel: "Your IP address",
      inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      }
    });
    if (userNAme) {
      Swal.fire(`Your IP address is ${userNAme}`);
    }
  })()
}