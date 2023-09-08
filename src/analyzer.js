const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    if (text === '') {
      return 0;
    }
   
    // const s = text.replace(/^\s+/, ''); 
    const s = text.trim();// quita los espacios de el inicio y al final
    const t = s.replace(/[a-zA-Z]/g, ''); // quita las letras
    const n = t.replace(/[0-9]/g, ''); // quita los numeros
    const txtSigns = n.replace(/,/g, ''); // quita las comas
    

    return txtSigns.length;

  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    if (text === '') {
      return 0;
    }
    return text.length;

  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    if (text === '') {
      return 0;
    }
    const txtSpace = text.replace(/\s/g, '');
    const txtSigns = txtSpace.replace(/[\W_]/g, '');
    return txtSigns.length;


  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const signos = /,|;|:|"|«|»|¡|¿|!|&+/g;
    const signosEspeciales = /\u0027|\u002D|\0022|\.|\{|\}|\(|\)|\[|\]|\?|\s|\n|\t|\\|\r|\b|\f|\v+/g;
    const patternLetters = /[a-zA-Z](\d+)/g; // patron para saaber si hay letras adelante y destras de un numero
    const pattern = /\d+\.\d+/g;
    const p = /\d+/g;

    if(text.match(patternLetters)){
      return 0;
    }

    if (text === '') { // valida que text no venga vacio
      return 0;
    }
  
    if (text.match(pattern)) {
      return text.match(pattern).length;
    }
    if (text.match(p)) {
      return text.match(p).length;
    }

    if (text.match(signos) || text.match(signosEspeciales)) {
      return 0;
    }
  },


  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const patternLetters = /[a-zA-Z](\d+)/g; // patron para saaber si hay letras adelante y destras de un numero
    if(text.match(patternLetters)){
      return 0;
    }

    if (text === '') {
      return 0;
    }


    const pattern = /\d+\.\d+/g;
    const txtSpace = text.replace(/\s/g, '');
    let txtLetters = txtSpace.replace(/[a-zA-Z]/g, '');
    let suma = 0;
    if (txtLetters.match(pattern)) {
      const numF = txtLetters.match(pattern);
      for (let i = 0; i <= numF.length; i++) {
        const iw = parseFloat(numF[i]);
        if (iw > 0.0) {
          suma += iw;
        }
      } return suma;
    }
    else {
      // eslint-disable-next-line no-const-assign
      txtLetters = txtLetters.replace(/[\W_]/g, '');
      for (let i = 0; i <= txtLetters.length; i++) {
        const iw = parseFloat(txtLetters[i]);
        if (iw > 0.0) {
          suma += iw;
        }
      } return suma;
    }
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    if (text === '') {
      return 0;
    }
    // text = text.split(' ').length

    const palabras = parseFloat(analyzer.getWordCount(text));

    // const caracteres = parseFloat(analyzer.getCharacterCount(text));
    const caracteres = text.replace(/\s/g, '');
    // const caracteres = parseFloat(analyzer.getCharacterCountExcludingSpaces(text));
    const promedio = caracteres.length / palabras;
    
  
    return parseFloat(promedio.toFixed(2));


  },
};



export default analyzer;
