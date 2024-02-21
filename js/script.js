const inpNameJa = document.querySelector(".inp-name");
const inpKmJa = document.querySelector(".inp-km");
const selectAgeJv = document.getElementById("select-age");
const btnGenJa = document.querySelector(".btngen")
let sconto;
const prezzoKm = 0.21;

console.log(inpKmJa.value);
console.log(prezzoKm);

btnGenJa.addEventListener('click',function(event){
  let prezzoBigl = inpKmJa.value * prezzoKm;
  console.log(prezzoBigl);
  event.preventDefault();
  console.log(inpNameJa.value);
  console.log(inpKmJa.value);
  console.log(selectAgeJv.value);

  document.getElementById("conto").innerHTML =
     `
     Il prezzo del tuo biglietto e : ${prezzoBigl.toFixed(2)} €
     `;

  if(selectAgeJv.value < 18){
      sconto = (+prezzoBigl * 20) / 100;
      
      prezzoBigl = prezzoBigl - sconto;
      
      document.getElementById("conto-scontato").innerHTML =
      `
      (Minorenne) Il prezzo scontato del 20% e : ${prezzoBigl.toFixed(2)} € 
      `;
    } else if(selectAgeJv.value > 65){
      sconto = (prezzoBigl * 40) / 100;
      prezzoBigl = prezzoBigl - sconto;
      document.getElementById("conto-scontato").innerHTML =
      `
      (Over 65) Il prezzo scontato del 40% e : ${prezzoBigl.toFixed(2)} € 
      `;
    }else{
      document.getElementById("conto-scontato").innerHTML =
      `
      Il prezzo senza sconti e : ${prezzoBigl.toFixed(2)} €
      `;
    }
   

})
