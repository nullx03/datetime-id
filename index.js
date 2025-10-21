const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const now = new Date();

  // Obtiene la fecha y hora en formato string con zona horaria de México
  const mexicoDateStr = now.toLocaleString('es-MX', { timeZone: 'America/Mexico_City', hour12: false });

  // Convierte la cadena a objeto Date para manipularla
  const mexicoDate = new Date(mexicoDateStr);

  const pad = (num) => num.toString().padStart(2, '0');

  const id = 
    mexicoDate.getFullYear().toString() +
    pad(mexicoDate.getMonth() + 1) +
    pad(mexicoDate.getDate()) +
    pad(mexicoDate.getHours()) +
    pad(mexicoDate.getMinutes()) +
    pad(mexicoDate.getSeconds());

  res.send(`ID generado (hora México): ${id}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App escuchando en puerto ${port}`);
});
