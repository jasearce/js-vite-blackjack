/**
 * Esta funcion retorna la ultima carta del deck
 * @param {Array<String>} deck es un arreglo de strings
 * @returns {String} retorna la ultima carta del deck
 */
export const pedirCarta = ( deck ) => {

  if ( !deck || deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}