import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


document.addEventListener("click", function() {
  document.getElementById("text-area").value = "";
  document.querySelector('.character-count').innerHTML = "Caracteres: " + 0;
  document.querySelector('.character-no-spaces-count').innerHTML = "Caracteres sin espacios: " + 0;
  document.querySelector('.number-count').innerHTML = "Numeros: " + 0;
  document.querySelector('.word-count').innerHTML = "Palabras: " + 0;
  document.querySelector('.cnumber-sum').innerHTML = "Suma de numeros: " + 0;
  document.querySelector('.word-length-average').innerHTML = "Caracteres promedio: " + 0;

});

document.addEventListener('keyup', function (event) {
  let caracterCount = 0;
  let caracterCount2 = 0;
  let caracterCountNumbers = 0;
  let countWords = 0;
  let sumNumbers = 0;
  let promWords = 0;

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
    promWords = analyzer.getAverageWordLength(texto);
    // const c = parseInt(caracterCount2);
    // const p = parseInt(countWords);


    document.querySelector('.character-count').innerHTML = "Caracteres: " + caracterCount; // solo mandamos el dato que nos mando el metodo y lo mostramos en pantalla mediante la clase
    document.querySelector('.character-no-spaces-count').innerHTML = "Caracteres sin espacios: " + caracterCount2;
    document.querySelector('.number-count').innerHTML = "Numeros: " + caracterCountNumbers;
    document.querySelector('.word-count').innerHTML = "Palabras: " + countWords;
    document.querySelector('.cnumber-sum').innerHTML = "Suma de numeros: " + sumNumbers;
    document.querySelector('.word-length-average').innerHTML = "Caracteres promedio: " + promWords;

  }

  
});


