/**
 * Esta funcion retorna el elemento HTML asociado a la carta del parametro
 * @param {String} carta 
 * @returns {HTMLImageElement} retorna la imagen HTML de la carta
 */
export const crearCartaHTML = (carta) => {

  if( !carta ) throw new Error("La carta es requerida");

  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement('img');
  imgCarta.src = `./assets/cartas/${ carta }.png`; //3H, JD
  imgCarta.classList.add('carta');

  return imgCarta;
}