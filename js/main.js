window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calcular() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
  
    calculo = peso / (altura * altura);

    alturaResultado.textContent = altura + "m";
    pesoResultado.textContent = peso + "kg";
    IMCresultado.textContent = Math.floor(calculo);
  
    if (calculo < 18.5) {
    tabela.textContent = "abaixo do peso";} 
    else if ((calculo > 18.5) & (calculo < 24.9)) {
    tabela.textContent = "peso normal";}

    else if ((calculo > 25.0) & (calculo < 29.9)) {
    tabela.textContent = "excesso de peso";} 
      
    else if ((calculo > 30.0) & (calculo < 34.9)) {
    tabela.textContent = "obsidade classe I";} 
    
    else if ((calculo > 35.0) & (calculo < 39.9)) {
    tabela.textContent = "obsidade classe II";} 

    else if (calculo > 40) {
    tabela.textContent = "obsidade classe III";}
  }
  