const inpNameJa = document.querySelector(".inp-name");
const inpKmJa = document.querySelector(".inp-km");
const selectAgeJv = document.getElementById("select-age");
const btnGenJa = document.querySelector(".btngen");
const btnAnnJa = document.querySelector(".btnann");
const tiketJs = document.getElementById("tiket");
let sconto;
const prezzoKm = 0.21;

btnAnnJa.addEventListener("click", function(){
  tiketJs.classList.add("d-none")
})





btnGenJa.addEventListener('click',function(event){


  if((inpNameJa.value == '') || (inpNameJa.value == 'undefined')) {
    alert('Inserire nome e cognome');
    tiketJs.classList.add('d-none');
  } else if ((inpKmJa.value == '') || (inpKmJa.value == 'undefined')) {
    alert('Inserire i chilometri da percorrere');
    tiketJs.classList.add('d-none');
  }

  event.preventDefault();
  document.getElementById("name").innerHTML = inpNameJa.value;
  document.getElementById("binari").innerHTML =
  Math.floor(Math.random() * 10 + 1);
  document.getElementById("code").innerHTML =
  Math.floor(Math.random() * 9000 + 1000);
  let prezzoBigl = inpKmJa.value * prezzoKm;
  tiketJs.classList.remove("d-none")

  if(selectAgeJv.value < 18){
    
    document.getElementById("discount").innerHTML = "Minorenne";
    sconto = (prezzoBigl * 20) / 100;
    prezzoBigl = prezzoBigl - sconto;
    document.getElementById("conto-scontato").innerHTML =
    ` ${prezzoBigl.toFixed(2)} € `;

  }else if(selectAgeJv.value > 65){

    document.getElementById("discount").innerHTML = "Silver";
    sconto = (prezzoBigl * 40) / 100;
    prezzoBigl = prezzoBigl - sconto;
    document.getElementById("conto-scontato").innerHTML =
    `${prezzoBigl.toFixed(2)} € `;

  }else{

    document.getElementById("discount").innerHTML = "Base";
    document.getElementById("conto-scontato").innerHTML =
    `${prezzoBigl.toFixed(2)} €`;

  }
})
