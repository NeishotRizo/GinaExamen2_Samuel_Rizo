const { Router } = require('express');
const { obtenerPreguntasAleatorias } = require('../middlewares/preguntas');

const router = Router();

router.get('/', (req, res) => {
  try {
    // Obtenemos 8 preguntas aleatorias
    const preguntas = obtenerPreguntasAleatorias(8);

    // Mapeamos solo lo que queremos enviar al frontend: texto y opciones
    const preguntasFrontend = preguntas.map(p => ({
      id: p.id,
      texto: p.texto,
      opciones: p.opciones
    }));

    res.json({ preguntas: preguntasFrontend });
  } catch (error) {
    console.error('Error al obtener preguntas:', error);
    res.status(500).json({ mensaje: 'Error al obtener las preguntas' });
  }
});

module.exports = router;
