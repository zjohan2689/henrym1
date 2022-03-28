'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var arreglo = 0
  arreglo = num.toString().split("").reverse();
  let resultado = 0;
  for (var i = 0; i < arreglo.length; i++){
    resultado += arreglo[i] * Math.pow(2, i)
}
return resultado
}


function DecimalABinario(num) {
  // tu codigo aca

  if (num > 0) {
    return DecimalABinario( parseInt(num / 2) ) + (num % 2)
};
return '';

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}