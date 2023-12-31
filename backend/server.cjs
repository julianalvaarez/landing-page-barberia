const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();  
const port = 5173;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configura el transporte de nodemailer (ajusta los detalles según tu proveedor de correo)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'julialva2008@gmail.com',
    pass: 'Julialva08',
  },
});

// Ruta para manejar el envío del formulario
app.post('/enviar-correo', (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const mailOptions = {
    from: 'julialva2008@gmail.com',
    to: 'julialva2008@gmail.com', // Cambia esto al correo donde quieres recibir los mensajes
    subject: 'Nuevo mensaje del formulario',
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo.');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado con éxito.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
