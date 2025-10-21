const express = require('express');
const app = express();

// Librería nativa para usar fechas con zona horaria
const { DateTime } = require('luxon');

app.get('/', (req, res) => {
  try {
    // Usar Luxon para obtener la hora en Ciudad de México
    const dt = DateTime.now().setZone('America/Mexico_City');

    const id = dt.toFormat('yyyyMMddHHmmss');

    res.send(`ID generado (hora México): ${id}`);
  } catch (error) {
    console.error("Error generando el ID:", error);
    res.status(500).send("Ocurrió un error.");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor activo en puerto ${port}`);
});
