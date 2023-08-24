import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

document.addEventListener('keyup', function (event) {
  let caracterCount = 0;
  let caracterCount2 = 0;
  let caracterCountNumbers = 0;
  let countWords = 0;
  let sumNumbers = 0;

  let texto = '';
  // let numero = '';

  if (event.key) {
    texto = document.getElementById("text-area").value; // En esta parte obtenemos los valores del input (text-area) y los guardamos en una variable text
    // numero = parseInt(texto);

    caracterCount = analyzer.getCharacterCount(texto); // llamamos al metodo, le otorgamos un parametro y lo guardamos en la variable car
    caracterCount2 = analyzer.getCharacterCountExcludingSpaces(texto);
    caracterCountNumbers = analyzer.getNumberCount(texto);
    countWords = analyzer.getWordCount(texto);
    sumNumbers = analyzer.getNumberSum(texto);


    document.querySelector('.character-count').innerHTML = "Caracteres: " + caracterCount; // solo mandamos el dato que nos mando el metodo y lo mostramos en pantalla mediante la clase
    document.querySelector('.character-no-spaces-count').innerHTML = "Caracteres sin espacios: " + caracterCount2;
    document.querySelector('.number-count').innerHTML = "Numeros: " + caracterCountNumbers;
    document.querySelector('.word-count').innerHTML = "Palabras: " + countWords;
    document.querySelector('.cnumber-sum').innerHTML = "Suma de numeros: " + sumNumbers;

  }
});