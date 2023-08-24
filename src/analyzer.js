const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
   
    if (text === ''){
      return 0;
    }
    // s.replace(/\s+/g, ' ').trim();

    const s = text.replace(/^\s+/, '');
    const t = s.replace(/[a-zA-Z]/g, '');
    const n = t.replace(/[0-9]/g, '');

    return n.length;
  
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    if (text === ''){
      return 0;
    }
    return text.length;

  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    if (text === ''){
      return 0;
    }
    const txtSpace = text.replace(/\s/g, '');
    const txtSigns = txtSpace.replace(/[\W_]/g, '');
    return txtSigns.length;
    
  
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    if (text === '') {
      return 0;
    } 
    const txtSpace = text.replace(/\s/g, '');
    const txtSigns = txtSpace.replace(/[\W_]/g, '');
    const n = txtSigns.replace(/[a-zA-Z]/g, '');
    return n.length;
    
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    if (text === '') {
      return 0;
    }

    let suma = 0;
    const txtSpace = text.replace(/\s/g, '');
    const txtSigns = txtSpace.replace(/[\W_]/g, '');
    const txtLetters = txtSigns.replace(/[a-zA-Z]/g, '');

    for (let i = 0; i <= txtLetters.length; i++) {
      const iw = parseInt(txtLetters[i]); 
      if (iw > 0) {
        suma += iw;
      }
    } return suma;
  },
};

export default analyzer;
