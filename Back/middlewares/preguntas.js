//Banco de preguntas

const preguntas = [
  { 
    id: 1, 
    texto: "¿Qué tipo de lenguaje es JavaScript?",
    opciones: ["Lenguaje de marcado", "Lenguaje de programación", "Lenguaje de base de datos"],
    respuestaCorrecta: "Lenguaje de programación"
  },
  { 
    id: 2, 
    texto: "¿Qué diferencia hay entre 'var', 'let' y 'const'?",
    opciones: ["Scope y reasignación", "No hay diferencia", "Solo const existe"],
    respuestaCorrecta: "Scope y reasignación"
  },
  { 
    id: 3, 
    texto: "¿Qué es una función de flecha (arrow function)?",
    opciones: ["Una función con 'function'", "Una función anónima compacta", "Una variable especial"],
    respuestaCorrecta: "Una función anónima compacta"
  },
  { 
    id: 4, 
    texto: "¿Qué valor devuelve typeof null?",
    opciones: ["'null'", "'object'", "'undefined'"],
    respuestaCorrecta: "'object'"
  },
  { 
    id: 5, 
    texto: "¿Qué es el DOM y para qué sirve?",
    opciones: ["Documento de Markdown", "Document Object Model", "Documento de memoria"],
    respuestaCorrecta: "Document Object Model"
  },
  { 
    id: 6, 
    texto: "¿Qué es una promesa (Promise) en JavaScript?",
    opciones: ["Objeto para manejo de asincronía", "Una variable especial", "Función de tiempo"],
    respuestaCorrecta: "Objeto para manejo de asincronía"
  },
  { 
    id: 7, 
    texto: "¿Qué hace el método map() en un arreglo?",
    opciones: ["Filtra elementos", "Transforma cada elemento y devuelve un nuevo arreglo", "Elimina elementos duplicados"],
    respuestaCorrecta: "Transforma cada elemento y devuelve un nuevo arreglo"
  },
  { 
    id: 8, 
    texto: "¿Qué diferencia hay entre == y === en JavaScript?",
    opciones: ["No hay diferencia", "== compara valores y === compara tipo y valor", "== compara tipo y === compara valores"],
    respuestaCorrecta: "== compara valores y === compara tipo y valor"
  },
  { 
    id: 9, 
    texto: "¿Qué es el event loop y por qué es importante?",
    opciones: ["Es un ciclo de eventos que maneja asincronía", "Es un tipo de bucle infinito", "Es un objeto especial de JS"],
    respuestaCorrecta: "Es un ciclo de eventos que maneja asincronía"
  },
  { 
    id: 10, 
    texto: "¿Qué es el objeto 'this' y cómo cambia según el contexto?",
    opciones: ["Es siempre el objeto global", "Se refiere al contexto de ejecución actual", "Solo existe en funciones"],
    respuestaCorrecta: "Se refiere al contexto de ejecución actual"
  },
  { 
    id: 11, 
    texto: "¿Qué significa 'hoisting' en JavaScript?",
    opciones: ["Mover funciones y variables al inicio de su scope", "Eliminar variables no usadas", "Un error de sintaxis"],
    respuestaCorrecta: "Mover funciones y variables al inicio de su scope"
  },
  { 
    id: 12, 
    texto: "¿Qué es JSON y para qué se utiliza?",
    opciones: ["Formato de texto para datos", "Lenguaje de programación", "Base de datos"],
    respuestaCorrecta: "Formato de texto para datos"
  },
  { 
    id: 13, 
    texto: "¿Qué es una función callback?",
    opciones: ["Función que se pasa como argumento a otra función", "Función que llama a otra función automáticamente", "Función que nunca se ejecuta"],
    respuestaCorrecta: "Función que se pasa como argumento a otra función"
  },
  { 
    id: 14, 
    texto: "¿Qué hace el método filter() en un arreglo?",
    opciones: ["Elimina todos los elementos", "Devuelve un nuevo arreglo con elementos que cumplen la condición", "Transforma los elementos del arreglo"],
    respuestaCorrecta: "Devuelve un nuevo arreglo con elementos que cumplen la condición"
  },
  { 
    id: 15, 
    texto: "¿Qué diferencia hay entre null y undefined?",
    opciones: ["null significa ausencia de valor y undefined significa variable no definida", "No hay diferencia", "undefined es un objeto y null es un número"],
    respuestaCorrecta: "null significa ausencia de valor y undefined significa variable no definida"
  },
  { 
    id: 16, 
    texto: "¿Qué hace el método fetch() y qué devuelve?",
    opciones: ["Hace peticiones HTTP y devuelve una promesa", "Hace cálculos matemáticos", "Elimina elementos de un arreglo"],
    respuestaCorrecta: "Hace peticiones HTTP y devuelve una promesa"
  }
];

function obtenerPreguntasAleatorias(cantidad) {
  const copia = [...preguntas]; // usamos ... que se llama spread y que copia la variable original(Array) en otra variable diferente
  const seleccionadas = [];

  while (seleccionadas.length < cantidad && copia.length > 0) {
    const index = Math.floor(Math.random() * copia.length);
    //Usamos splice para mandar elementos de la copia a seleccionadas y que luego sean eliminados de la copia, 
    //y el arreglo que nos retorno tomamos la posicion 0 para pushearla en seleccionadas
    // Saca 1 elemento de copia en la posición index,
    // y de ese arreglo que devuelve splice, dame el primer (y único) elemento.
    seleccionadas.push(copia.splice(index, 1)[0]);
  }

  return seleccionadas;
}

// Exportar para usarlo en otros archivos (por ejemplo, en una ruta)
module.exports = { obtenerPreguntasAleatorias };