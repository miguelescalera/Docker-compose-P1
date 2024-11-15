const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la Home" });
});

app.get("/prueba", (req, res) => {
  res.json({ message: "Gracias por consumir el servicio de prueba" });
});

app.get("/saludo", (req, res) => {
  const { name } = req.query;
  if (name) {
    res.json({ message: `Hola, ${name} bienvenido!` });
  } else {
    res.json({
      message:
        "Hola! Por favor, proporciona un nombre en la URL, por ejemplo /saludo?name=TU_NOMBRE",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
